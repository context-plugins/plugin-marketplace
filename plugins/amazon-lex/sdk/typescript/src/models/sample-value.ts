import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SampleValue = {
  /** The value that can be used for a slot type. */
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sampleValueSchema: Schema<SampleValue> = s.object<SampleValue>(
  {
    value: s.string(),
  },
  { additionalProperties: s.json() },
);
