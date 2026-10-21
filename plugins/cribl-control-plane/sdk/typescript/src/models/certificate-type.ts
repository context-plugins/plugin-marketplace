import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Certificate credentials for the Azure service principal. */
export type CertificateType = {
  /** The certificate you registered as credentials for your app in the Azure portal */
  certificateName: string;
};

export const certificateTypeSchema: Schema<CertificateType> = s.object<CertificateType>({
  certificateName: s.string(),
});
