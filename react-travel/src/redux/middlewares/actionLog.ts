import { Middleware } from "redux"
// 中间件
export const actionLog = (store) => (next) => (action) => {
  console.log('当前state', store.getState());
  console.log('fire action', action);
  next(action);
  console.log('state更新', store.getState());
}