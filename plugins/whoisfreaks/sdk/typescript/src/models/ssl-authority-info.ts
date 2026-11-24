import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SslAuthorityInfo = {
  issuers?: string[];
  ocsp?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sslAuthorityInfoSchema: Schema<SslAuthorityInfo> = s.object<SslAuthorityInfo>(
  {
    issuers: s.optional(s.array(s.string())),
    ocsp: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
