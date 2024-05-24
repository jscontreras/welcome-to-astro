import { defineMiddleware } from 'astro/middleware';

export const middleware = defineMiddleware(async (context, next) => {
  const oldValue = context.cookies.get('test') || {value: 'hello'};
  console.log('oldValue', oldValue);
  context.cookies.set('test', oldValue.value + '*');
  console.log('newValue', context.cookies.get('test')?.value);
  console.log('context.request.headers', context.request.headers);
  return next();
});
export const onRequest = middleware;