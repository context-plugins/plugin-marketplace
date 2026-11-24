import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Summary = {
  totalCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const summarySchema: Schema<Summary> = s.object<Summary>(
  {
    totalCount: s.optional(s.int()),
    _keysMap: {
      totalCount: "total_count",
    },
  },
  { additionalProperties: s.json() },
);
