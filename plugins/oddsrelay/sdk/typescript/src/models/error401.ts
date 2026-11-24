import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error6Schema, type Error6 } from "./error6.js";

export type Error401 = {
  error: Error6;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error401Schema: Schema<Error401> = s.object<Error401>(
  {
    error: error6Schema,
  },
  { additionalProperties: s.json() },
);
