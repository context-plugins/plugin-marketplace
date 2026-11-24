import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1Click2Call401Error = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1Click2Call401ErrorSchema: Schema<ApiV1Click2Call401Error> =
  s.object<ApiV1Click2Call401Error>(
    {
      error: s.string(),
    },
    { additionalProperties: s.json() },
  );
