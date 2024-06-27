 export default async function sitemap(){
    const baseLocalUrl = "https://souq-mahala.com"

      return [
        {
            url: `${baseLocalUrl}`,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/cart`,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/cart/Process`,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/cp`,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/cp/about`,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/cp/active-products`,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/cp/all-products`,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/cp/contact`,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/cp/invitation `,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/cp/my-offers `,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/cp/my-products `,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/cp/OrderDetails`,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/cp/orders`,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/cp/services`,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/cp/store-data`,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/cp/suggestion`,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/cp/technical-support`,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/cp/UserSetting`,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/login`,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/matgars/NewPassword`,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/offers`,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/reset`,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/SendCode`,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/shop`,
            lastModified: new Date(),
          },
          {
            url: `${baseLocalUrl}/sign-up`,
            lastModified: new Date(),
          },

      ]
  }
