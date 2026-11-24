import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error1Schema, type Error1 } from "./error1.js";

export type ApiV1Click2Call402Error = {
  error: Error1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1Click2Call402ErrorSchema: Schema<ApiV1Click2Call402Error> =
  s.object<ApiV1Click2Call402Error>(
    {
      error: error1Schema,
    },
    { additionalProperties: s.json() },
  );
