import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SslAlternateNames = {
  dnsNames?: string[];
  emailAddresses?: string[];
  ipAddresses?: string[];
  uris?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sslAlternateNamesSchema: Schema<SslAlternateNames> = s.object<SslAlternateNames>(
  {
    dnsNames: s.optional(s.array(s.string())),
    emailAddresses: s.optional(s.array(s.string())),
    ipAddresses: s.optional(s.array(s.string())),
    uris: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
