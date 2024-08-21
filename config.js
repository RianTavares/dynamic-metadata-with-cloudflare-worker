export const config = {
  domainSource: "https://e44dd3fa-cb26-42eb-bc21-7287a9745fd9.weweb-preview.io",
  patterns: [
      {
          pattern: "/instructor/[^/]+",
          metaDataEndpoint: "https://alvuagzviphwrdjreldb.supabase.co/functions/v1/teacher-metadata?slug_input={id}"
      }
  ]
};
