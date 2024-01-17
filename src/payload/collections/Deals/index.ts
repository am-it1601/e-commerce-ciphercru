import path from 'path'
import type { CollectionConfig } from 'payload/types'

const Deals: CollectionConfig = {
  slug: 'deals',
  upload: {
    staticDir: path.resolve(__dirname, '../../../media'),
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'date',
      type: 'text',
      required: true,
    },
  ],
}

export default Deals
