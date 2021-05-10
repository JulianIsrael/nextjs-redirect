module.exports = {
    async rewrites() {
        return [
            {
                source: '/blog',
                destination: 'https://example.com/blog',
            },
            {
                source: '/operation',
                destination: 'https://staging-operations.hellofresh.com/auth',
            },
        ]
    },
}