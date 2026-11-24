import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Filters to narrow product matching. */
export type Filters = {
  /** The store department to filter products by. */
  department?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filtersSchema: Schema<Filters> = s.object<Filters>(
  {
    department: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
