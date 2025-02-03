import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
  };
export default withSentryConfig(nextConfig, {


org: "ilkinportfolio",
project: "javascript-nextjs",

silent: !process.env.CI,


widenClientFileUpload: true,


hideSourceMaps: true,

disableLogger: true,


automaticVercelMonitors: true,
});