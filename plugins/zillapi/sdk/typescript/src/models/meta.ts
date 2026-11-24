import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Meta = {
  count?: number;
  includeUnits?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metaSchema: Schema<Meta> = s.object<Meta>(
  {
    count: s.optional(s.int()),
    includeUnits: s.optional(s.string()),
    _keysMap: {
      includeUnits: "include_units",
    },
  },
  { additionalProperties: s.json() },
);
