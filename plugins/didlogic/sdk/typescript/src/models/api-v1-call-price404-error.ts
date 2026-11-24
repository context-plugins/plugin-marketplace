import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error1Schema, type Error1 } from "./error1.js";

export type ApiV1CallPrice404Error = {
  error: Error1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CallPrice404ErrorSchema: Schema<ApiV1CallPrice404Error> = s.object<ApiV1CallPrice404Error>(
  {
    error: error1Schema,
  },
  { additionalProperties: s.json() },
);
