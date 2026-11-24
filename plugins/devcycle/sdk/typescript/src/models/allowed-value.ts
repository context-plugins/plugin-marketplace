import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AllowedValue = {
  label: string;
  value: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const allowedValueSchema: Schema<AllowedValue> = s.object<AllowedValue>(
  {
    label: s.string(),
    value: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
