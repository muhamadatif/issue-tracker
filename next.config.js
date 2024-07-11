/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // we customize the headers to be sent to our end points
        source: "/:path*",
        headers: [
          {
            key: "referrer-policy",
            value: "no-referrer",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
