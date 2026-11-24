import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { certificateDetailSchema, type CertificateDetail } from "./certificate-detail.js";

export type DescribeCertificateResponse = {
  certificate?: CertificateDetail;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeCertificateResponseSchema: Schema<DescribeCertificateResponse> =
  s.object<DescribeCertificateResponse>(
    {
      certificate: s.optional(s.lazy(() => certificateDetailSchema)),
      _keysMap: {
        certificate: "Certificate",
      },
    },
    { additionalProperties: s.json() },
  );
