import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exactDomainSchema, type ExactDomain } from "./exact-domain.js";
import { subdomainsSchema, type Subdomains } from "./subdomains.js";
import { wildcardsSchema, type Wildcards } from "./wildcards.js";

export type DomainScope = {
  /** Whether validation applies to the exact domain. */
  exactDomain?: ExactDomain;
  /** Whether validation applies to subdomains. */
  subdomains?: Subdomains;
  /** Whether validation applies to wildcard domains. */
  wildcards?: Wildcards;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const domainScopeSchema: Schema<DomainScope> = s.object<DomainScope>(
  {
    exactDomain: s.optional(s.lazy(() => exactDomainSchema)),
    subdomains: s.optional(s.lazy(() => subdomainsSchema)),
    wildcards: s.optional(s.lazy(() => wildcardsSchema)),
    _keysMap: {
      exactDomain: "ExactDomain",
      subdomains: "Subdomains",
      wildcards: "Wildcards",
    },
  },
  { additionalProperties: s.json() },
);
