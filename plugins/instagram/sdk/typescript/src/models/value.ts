import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Value = {
  value?: number;
  endTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueSchema: Schema<Value> = s.object<Value>(
  {
    value: s.optional(s.int()),
    endTime: s.optional(s.dateTime()),
    _keysMap: {
      endTime: "end_time",
    },
  },
  { additionalProperties: s.json() },
);
