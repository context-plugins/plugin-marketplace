import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Custom query for sources that doesn't support sql. For example, Airtable. */
export type Custom = {
  query: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customSchema: Schema<Custom> = s.object<Custom>(
  {
    query: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
