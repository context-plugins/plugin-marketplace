import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Filters to narrow product matching for this ingredient. */
export type Filters1 = {
  /** The store department to filter products by. */
  department?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filters1Schema: Schema<Filters1> = s.object<Filters1>(
  {
    department: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
