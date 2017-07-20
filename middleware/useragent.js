import Useragent from 'express-useragent'

export default function (context) {
  if (context.isServer) {
    context.useragent = Useragent.parse(context.req.headers['user-agent'])
  } else {
    context.useragent = Useragent.parse(navigator.userAgent)
  }
  context.isMobile = context.useragent.isMobile
}
