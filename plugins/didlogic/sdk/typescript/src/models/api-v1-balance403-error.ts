import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1Balance403Error = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1Balance403ErrorSchema: Schema<ApiV1Balance403Error> = s.object<ApiV1Balance403Error>(
  {
    error: s.string(),
  },
  { additionalProperties: s.json() },
);
