import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error4Schema, type Error4 } from "./error4.js";

export type ApiV1Click2Call422Error = {
  error: Error4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1Click2Call422ErrorSchema: Schema<ApiV1Click2Call422Error> =
  s.object<ApiV1Click2Call422Error>(
    {
      error: error4Schema,
    },
    { additionalProperties: s.json() },
  );
