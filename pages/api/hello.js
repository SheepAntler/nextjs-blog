// you should NOT use API routes in getStaticProps()/getStaticPaths() b/c they don't ever run client-side
// you CAN use API routes on form submission and such

// Preview mode uses this
export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' });
}