import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DescribeCertificateRequest = {
  /**
   * The Amazon Resource Name (ARN) of the ACM certificate. The ARN must have the following form:
   * arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012 For more
   * information about ARNs, see Amazon Resource Names (ARNs).
   */
  certificateArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeCertificateRequestSchema: Schema<DescribeCertificateRequest> =
  s.object<DescribeCertificateRequest>(
    {
      certificateArn: s.string(),
      _keysMap: {
        certificateArn: "CertificateArn",
      },
    },
    { additionalProperties: s.json() },
  );
