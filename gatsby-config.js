module.exports = {
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "",
                // Puts tracking script in the head instead of the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**", "/do-not-track/me/too/"],
            },
        },
    ]
}
  