import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Specification = {
  /** Specification name */
  displayName?: string;
  /** Available values */
  values?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const specificationSchema: Schema<Specification> = s.object<Specification>(
  {
    displayName: s.optional(s.string()),
    values: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
