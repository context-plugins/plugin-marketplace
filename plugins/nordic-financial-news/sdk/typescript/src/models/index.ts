import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Index = {
  id?: string;
  name?: string;
  symbol?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const indexSchema: Schema<Index> = s.object<Index>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    symbol: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
