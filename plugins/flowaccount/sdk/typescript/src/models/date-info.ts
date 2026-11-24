import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DateInfo = {
  format?: string | null;
  type?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dateInfoSchema: Schema<DateInfo> = s.object<DateInfo>(
  {
    format: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
