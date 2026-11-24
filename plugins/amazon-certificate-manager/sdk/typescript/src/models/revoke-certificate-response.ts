import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RevokeCertificateResponse = {
  /** The Amazon Resource Name (ARN) of the public or private certificate that was revoked. */
  certificateArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const revokeCertificateResponseSchema: Schema<RevokeCertificateResponse> =
  s.object<RevokeCertificateResponse>(
    {
      certificateArn: s.optional(s.string()),
      _keysMap: {
        certificateArn: "CertificateArn",
      },
    },
    { additionalProperties: s.json() },
  );
