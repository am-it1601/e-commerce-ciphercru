export const PRODUCT_CATEGORIES = `categories {
  title
  id
  breadcrumbs {
    id
    label
  }
}`

export const CATEGORIES = `query categories {
  Categories(limit:300) {
    docs {
      title
      id
      media {
        alt
        width
        height
        url
      }
    }
  }
}`
