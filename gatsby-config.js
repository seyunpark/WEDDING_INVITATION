require("dotenv").config(); // .env 파일 로드

module.exports = {
  siteMetadata: {
    title: `weddingInvitation`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-mysql",
      options: {
        connectionDetails: {
          host: process.env.MYSQL_HOST || "localhost",
          user: process.env.MYSQL_USER || "root",
          password: process.env.MYSQL_PASSWORD || "admin123",
          database: process.env.MYSQL_DATABASE || "wedding_db",
        },
        queries: [
          {
            statement: "SELECT * FROM invitations",
            idFieldName: "id",
            name: "invitations",
          },
        ],
      },
    },
  ],
};
