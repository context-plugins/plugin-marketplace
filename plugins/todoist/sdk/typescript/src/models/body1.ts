import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body1 = {
  /** Shared label name to remove from matching tasks. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const body1Schema: Schema<Body1> = s.object<Body1>(
  {
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
