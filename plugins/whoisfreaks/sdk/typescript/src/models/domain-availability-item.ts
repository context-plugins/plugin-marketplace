import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DomainAvailabilityItem = {
  domain?: string;
  availability?: string;
  status?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const domainAvailabilityItemSchema: Schema<DomainAvailabilityItem> = s.object<DomainAvailabilityItem>(
  {
    domain: s.optional(s.string()),
    availability: s.optional(s.string()),
    status: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
