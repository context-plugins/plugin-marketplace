import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RequestCertificateResponse = {
  /**
   * String that contains the ARN of the issued certificate. This must be of the form:
   * arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012
   */
  certificateArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requestCertificateResponseSchema: Schema<RequestCertificateResponse> =
  s.object<RequestCertificateResponse>(
    {
      certificateArn: s.optional(s.string()),
      _keysMap: {
        certificateArn: "CertificateArn",
      },
    },
    { additionalProperties: s.json() },
  );
