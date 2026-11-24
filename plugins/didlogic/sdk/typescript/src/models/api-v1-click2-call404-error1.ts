import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error1Schema, type Error1 } from "./error1.js";

export type ApiV1Click2Call404Error1 = {
  error: Error1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1Click2Call404Error1Schema: Schema<ApiV1Click2Call404Error1> =
  s.object<ApiV1Click2Call404Error1>(
    {
      error: error1Schema,
    },
    { additionalProperties: s.json() },
  );
