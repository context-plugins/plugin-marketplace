import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1Calls401Error = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1Calls401ErrorSchema: Schema<ApiV1Calls401Error> = s.object<ApiV1Calls401Error>(
  {
    error: s.string(),
  },
  { additionalProperties: s.json() },
);
