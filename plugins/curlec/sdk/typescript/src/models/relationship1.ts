import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Relationship1 = {
  director?: boolean;
  executive?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const relationship1Schema: Schema<Relationship1> = s.object<Relationship1>(
  {
    director: s.optional(s.boolean()),
    executive: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
