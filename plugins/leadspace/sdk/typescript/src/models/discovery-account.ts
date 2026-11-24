import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Either companyName or companyWebsite is mandatory */
export type DiscoveryAccount = {
  companyName?: string;
  companyWebsite?: string;
  companylinkedinUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const discoveryAccountSchema: Schema<DiscoveryAccount> = s.object<DiscoveryAccount>(
  {
    companyName: s.optional(s.string()),
    companyWebsite: s.optional(s.string()),
    companylinkedinUrl: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
