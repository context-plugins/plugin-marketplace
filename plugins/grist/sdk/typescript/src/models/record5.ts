import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Record5 = {
  fields: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const record5Schema: Schema<Record5> = s.object<Record5>(
  {
    fields: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
