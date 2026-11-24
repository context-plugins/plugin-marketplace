import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V3EnrichedContactCompanyRef = {
  id?: string;
  name?: string;
  domain?: string;
  industry?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3EnrichedContactCompanyRefSchema: Schema<V3EnrichedContactCompanyRef> =
  s.object<V3EnrichedContactCompanyRef>(
    {
      id: s.optional(s.string()),
      name: s.optional(s.string()),
      domain: s.optional(s.string()),
      industry: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
