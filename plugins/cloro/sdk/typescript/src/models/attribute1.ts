import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Attribute1 = {
  label: string;
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attribute1Schema: Schema<Attribute1> = s.object<Attribute1>(
  {
    label: s.string(),
    value: s.string(),
  },
  { additionalProperties: s.json() },
);
