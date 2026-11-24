import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Warranty = {
  type?: string;
  miles?: string;
  months?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const warrantySchema: Schema<Warranty> = s.object<Warranty>(
  {
    type: s.optional(s.string()),
    miles: s.optional(s.string()),
    months: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
