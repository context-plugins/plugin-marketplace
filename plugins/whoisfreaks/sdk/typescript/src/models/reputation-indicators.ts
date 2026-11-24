import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ReputationIndicators = {
  isNewlyRegistered?: boolean;
  usesFreeExtension?: boolean;
  usesFreeSsl?: boolean;
  hasPrivacyWhois?: boolean;
  sslAgeDays?: number;
  hasDmarc?: boolean;
  hasSpf?: boolean;
  redirectsExternally?: boolean;
  javascriptObfuscated?: boolean;
  domainAgeDays?: number;
  registrar?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reputationIndicatorsSchema: Schema<ReputationIndicators> = s.object<ReputationIndicators>(
  {
    isNewlyRegistered: s.optional(s.boolean()),
    usesFreeExtension: s.optional(s.boolean()),
    usesFreeSsl: s.optional(s.boolean()),
    hasPrivacyWhois: s.optional(s.boolean()),
    sslAgeDays: s.optional(s.int()),
    hasDmarc: s.optional(s.boolean()),
    hasSpf: s.optional(s.boolean()),
    redirectsExternally: s.optional(s.boolean()),
    javascriptObfuscated: s.optional(s.boolean()),
    domainAgeDays: s.optional(s.int()),
    registrar: s.optional(s.string()),
    _keysMap: {
      isNewlyRegistered: "is_newly_registered",
      usesFreeExtension: "uses_free_extension",
      usesFreeSsl: "uses_free_ssl",
      hasPrivacyWhois: "has_privacy_whois",
      sslAgeDays: "ssl_age_days",
      hasDmarc: "has_dmarc",
      hasSpf: "has_spf",
      redirectsExternally: "redirects_externally",
      javascriptObfuscated: "javascript_obfuscated",
      domainAgeDays: "domain_age_days",
    },
  },
  { additionalProperties: s.json() },
);
