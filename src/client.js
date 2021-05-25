import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: 'kk2d333s',
    dataset: 'production',
    useCdn: true,
})