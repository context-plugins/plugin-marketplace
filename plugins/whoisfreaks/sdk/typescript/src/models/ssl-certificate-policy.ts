import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SslCertificatePolicy = {
  policyId?: string;
  policyQualifier?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sslCertificatePolicySchema: Schema<SslCertificatePolicy> = s.object<SslCertificatePolicy>(
  {
    policyId: s.optional(s.string()),
    policyQualifier: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
