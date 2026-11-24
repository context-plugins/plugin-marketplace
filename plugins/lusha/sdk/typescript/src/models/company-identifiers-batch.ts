import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyIdentifiersBatch = {
  domains?: string[];
  linkedinUrls?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companyIdentifiersBatchProperties: s.Shape<CompanyIdentifiersBatch> = {
  domains: s.optional(s.array(s.string())),
  linkedinUrls: s.optional(s.array(s.string())),
};

export const companyIdentifiersBatchInternalSchema: Schema<CompanyIdentifiersBatch> =
  s.object<CompanyIdentifiersBatch>(companyIdentifiersBatchProperties, { additionalProperties: s.json() });

export const companyIdentifiersBatchSchema: Schema<CompanyIdentifiersBatch> = s.lazySchema(() =>
  s.object<CompanyIdentifiersBatch>(
    {
      ...companyIdentifiersBatchProperties,
      domains: s.optional(s.array(s.string()).check(s.maxLength(100))),
      linkedinUrls: s.optional(s.array(s.string()).check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
