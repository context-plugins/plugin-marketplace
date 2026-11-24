import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { domainAvailabilityItemSchema, type DomainAvailabilityItem } from "./domain-availability-item.js";

export type DomainAvailabilityResponse = {
  domain?: string;
  availability?: string;
  message?: string;
  domainAvailableResponse?: DomainAvailabilityItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const domainAvailabilityResponseSchema: Schema<DomainAvailabilityResponse> =
  s.object<DomainAvailabilityResponse>(
    {
      domain: s.optional(s.string()),
      availability: s.optional(s.string()),
      message: s.optional(s.string()),
      domainAvailableResponse: s.optional(s.array(s.lazy(() => domainAvailabilityItemSchema))),
      _keysMap: {
        domainAvailableResponse: "domain_available_response",
      },
    },
    { additionalProperties: s.json() },
  );
