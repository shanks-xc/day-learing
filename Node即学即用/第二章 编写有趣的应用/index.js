/**
 * 当个客户端通信
 */
// let net = require('net')
// let chatServer = net.createServer()
// chatServer.on('connection', client => {
//   client.write('Hi\n')
//   // client.end() 注释后可以给客户端发送数据
//   client.on('data', data => {
//     console.log(data)
//   })
// })
// chatServer.listen(3000)


/**
 * 多个客户端通信
 */
let net = require('net')
let chatServer = net.createServer()
let clientList = []
chatServer.on('connection', client => {
  client.write('Hi\n')
  clientList.push(client) // 多个客户端
  // client.end() 注释后可以给客户端发送数据
  client.on('data', data => {
    clientList.forEach(item => {
      item.write(`${data} from ${client.remoteAddress} and ${client.remotePort}`)
    })
  })
})
chatServer.listen(3000)
