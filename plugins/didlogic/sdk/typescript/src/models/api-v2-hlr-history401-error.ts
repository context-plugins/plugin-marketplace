import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2HlrHistory401Error = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2HlrHistory401ErrorSchema: Schema<ApiV2HlrHistory401Error> =
  s.object<ApiV2HlrHistory401Error>(
    {
      error: s.string(),
    },
    { additionalProperties: s.json() },
  );
