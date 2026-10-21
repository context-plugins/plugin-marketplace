import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Certificate credentials for the service principal. */
export type CertificateTypeAzureBlobAuthTypeClientCert = {
  /** The certificate you registered as credentials for your app in the Azure portal */
  certificateName: string;
};

export const certificateTypeAzureBlobAuthTypeClientCertSchema: Schema<CertificateTypeAzureBlobAuthTypeClientCert> =
  s.object<CertificateTypeAzureBlobAuthTypeClientCert>({
    certificateName: s.string(),
  });
