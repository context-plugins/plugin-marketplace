import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1CallsStatistics403Error = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CallsStatistics403ErrorSchema: Schema<ApiV1CallsStatistics403Error> =
  s.object<ApiV1CallsStatistics403Error>(
    {
      error: s.string(),
    },
    { additionalProperties: s.json() },
  );
