import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DomainReputationInput = {
  domain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const domainReputationInputSchema: Schema<DomainReputationInput> = s.object<DomainReputationInput>(
  {
    domain: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
