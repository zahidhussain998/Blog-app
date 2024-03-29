import { DefaultDocumentNodeResolver } from "sanity/structure";
import Iframe from "sanity-plugin-iframe-pane";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  if (schemaType === 'post') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .options({
          url: 'https://www.netialap.com/api/preview', // Replace with your Vercel URL
          defaultSize: 'desktop',
          reload: {
            button: true,
          },
          attributes: {},
        })
        .title('Preview'),
    ]);
  }
};
