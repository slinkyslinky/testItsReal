
import { ConfigProvider, List, Typography, Button, Space } from 'antd'
import { useState } from 'react';

import ListItem from './ListItem';
function App() {

  const [data, setData] = useState([])

  function addTask() {
    const value = getRandomValue()
    const item = Date.now() + value
    setData([...data, item])
  }

  function getRandomValue() {
    return Math.round(Math.random() * 20 + 10) * 1000
  }



  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#73496b',
          },
        }}
      >
        <List
          header={
            <Space direction='horizontal' style={{ marginTop: "50px", display: "flex", justifyContent: "space-between" }}>
              <Typography.Title level={3} style={{ margin: 0 }}>List of Tasks</Typography.Title>
              <Button type="primary" onClick={addTask}>Add Task</Button>
            </Space>
          }
          dataSource={data}
          itemLayout="horizontal"
          style={{ maxWidth: "400px", margin: "0 auto" }}
          renderItem={(item, index) => (
            <List.Item >
              <Typography.Text strong> <div>#{index + 1}</div> </Typography.Text>
              <ListItem finishTime={item} data={data} setData={setData} />
            </List.Item>
          )}
        />
      </ConfigProvider>
    </div>
  );
}

export default App;
