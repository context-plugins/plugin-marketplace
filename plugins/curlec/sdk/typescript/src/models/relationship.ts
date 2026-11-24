import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Relationship = {
  /** True if the stakeholder is a company director. */
  director?: boolean;
  /** True if the stakeholder is an executive. */
  executive?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const relationshipSchema: Schema<Relationship> = s.object<Relationship>(
  {
    director: s.optional(s.boolean()),
    executive: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
