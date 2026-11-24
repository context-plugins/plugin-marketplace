import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request body for POST /v2.0/domain/availability. Use domainNames OR tld. */
export type BulkDomainAvailabilityRequest = {
  /** Mode 1 — list of full domain names. Cannot be used with tld. */
  domainNames?: string[];
  /** Mode 2 — TLDs to check against the domain query param. Cannot be used with domainNames. */
  tld?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bulkDomainAvailabilityRequestProperties: s.Shape<BulkDomainAvailabilityRequest> = {
  domainNames: s.optional(s.array(s.string())),
  tld: s.optional(s.array(s.string())),
};

export const bulkDomainAvailabilityRequestInternalSchema: Schema<BulkDomainAvailabilityRequest> =
  s.object<BulkDomainAvailabilityRequest>(bulkDomainAvailabilityRequestProperties, {
    additionalProperties: s.json(),
  });

export const bulkDomainAvailabilityRequestSchema: Schema<BulkDomainAvailabilityRequest> = s.lazySchema(() =>
  s.object<BulkDomainAvailabilityRequest>(
    {
      ...bulkDomainAvailabilityRequestProperties,
      domainNames: s.optional(s.array(s.string()).check(s.maxLength(100))),
      tld: s.optional(s.array(s.string()).check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
