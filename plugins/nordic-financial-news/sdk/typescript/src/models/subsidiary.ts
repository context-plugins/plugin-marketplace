import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Subsidiary = {
  id?: string;
  name?: string;
  ticker?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subsidiarySchema: Schema<Subsidiary> = s.object<Subsidiary>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    ticker: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
