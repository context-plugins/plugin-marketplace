import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetCertificateResponse = {
  /** The ACM-issued certificate corresponding to the ARN specified as input. */
  certificate?: string;
  /**
   * Certificates forming the requested certificate's chain of trust. The chain consists of the
   * certificate of the issuing CA and the intermediate certificates of any other subordinate CAs.
   */
  certificateChain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getCertificateResponseSchema: Schema<GetCertificateResponse> = s.object<GetCertificateResponse>(
  {
    certificate: s.optional(s.string()),
    certificateChain: s.optional(s.string()),
    _keysMap: {
      certificate: "Certificate",
      certificateChain: "CertificateChain",
    },
  },
  { additionalProperties: s.json() },
);
