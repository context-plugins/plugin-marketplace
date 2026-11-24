import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { revocationReason1Schema, type RevocationReason1 } from "./revocation-reason1.js";

export type RevokeCertificateRequest = {
  /**
   * The Amazon Resource Name (ARN) of the public or private certificate that will be revoked. The
   * ARN must have the following form:
   * arn:aws:acm:region:account:certificate/12345678-1234-1234-1234-123456789012
   */
  certificateArn: string;
  /** Specifies why you revoked the certificate. */
  revocationReason: RevocationReason1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const revokeCertificateRequestSchema: Schema<RevokeCertificateRequest> =
  s.object<RevokeCertificateRequest>(
    {
      certificateArn: s.string(),
      revocationReason: revocationReason1Schema,
      _keysMap: {
        certificateArn: "CertificateArn",
        revocationReason: "RevocationReason",
      },
    },
    { additionalProperties: s.json() },
  );
