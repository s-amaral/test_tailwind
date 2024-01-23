// eslint-disable-next-line import/prefer-default-export
export declare global {
  interface Window {
    // google tags
    gtag: (...any) => void;
    hbspt: {
      forms: {
        create: ({
          region,
          portalId,
          formId,
          target,
        }: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}
