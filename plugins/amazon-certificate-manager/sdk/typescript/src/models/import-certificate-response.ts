import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ImportCertificateResponse = {
  /** The Amazon Resource Name (ARN) of the imported certificate. */
  certificateArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const importCertificateResponseSchema: Schema<ImportCertificateResponse> =
  s.object<ImportCertificateResponse>(
    {
      certificateArn: s.optional(s.string()),
      _keysMap: {
        certificateArn: "CertificateArn",
      },
    },
    { additionalProperties: s.json() },
  );
