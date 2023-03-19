// import * as trpc from '@trpc/server';
 
// const appRouter = trpc.router().query('/', {
//   resolve: async (req) => {
//     return {
//       text: "Hello Peter."
//     }
//   }
// })

// export type AppRouter = typeof appRouter;


// import * as trpcExpress from '@trpc/server/adapters/express';
// export const api = trpcExpress.createExpressMiddleware({
//   router: appRouter,
// });




// import * as express from 'express';
// import * as cors from 'cors';
// const app = express()

// app.use(cors())

// app.get('/', (req, res) => {
//   let payload = {
//     msg: "Hello World...."
//   }
  
//   res.send(payload)
// })

// app.listen(8000, () => {
//   console.log("Server Started..")
// })





import * as express from 'express';
import * as cors from 'cors';
import * as trpc from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

const app = express()

app.use(cors())


const appRouter = trpc.router().query('test', {
    resolve: async (req) => {
      return {
        msg: "Hello Peter."
      }
    }
})

export const api = trpcExpress.createExpressMiddleware({
  router: appRouter,
});

app.use("/trpc", api)


// app.get('/', (req, res) => {
//   let payload = {
//     msg: "Hello World...."
//   }
//   res.send(payload)
// })


app.listen(8000, () => {
  console.log("Server Started..")
})


export type AppRouter = typeof appRouter;