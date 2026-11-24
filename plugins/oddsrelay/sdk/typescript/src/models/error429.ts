import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error5Schema, type Error5 } from "./error5.js";

export type Error429 = {
  error: Error5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error429Schema: Schema<Error429> = s.object<Error429>(
  {
    error: error5Schema,
  },
  { additionalProperties: s.json() },
);
