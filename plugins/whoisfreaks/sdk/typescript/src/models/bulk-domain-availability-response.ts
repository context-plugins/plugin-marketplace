import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { domainAvailabilityItemSchema, type DomainAvailabilityItem } from "./domain-availability-item.js";

export type BulkDomainAvailabilityResponse = {
  bulkDomainAvailabilityResponse?: DomainAvailabilityItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkDomainAvailabilityResponseSchema: Schema<BulkDomainAvailabilityResponse> =
  s.object<BulkDomainAvailabilityResponse>(
    {
      bulkDomainAvailabilityResponse: s.optional(s.array(s.lazy(() => domainAvailabilityItemSchema))),
      _keysMap: {
        bulkDomainAvailabilityResponse: "bulk_domain_availability_response",
      },
    },
    { additionalProperties: s.json() },
  );
