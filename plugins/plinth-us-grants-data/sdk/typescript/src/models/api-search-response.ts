import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resultInternalSchema, resultSchema, type Result } from "./result.js";

export type ApiSearchResponse = {
  /** The mode actually served (may differ from the one requested if it degraded). */
  mode?: string;
  results?: Result[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiSearchResponseProperties: s.Shape<ApiSearchResponse> = {
  mode: s.optional(s.string()),
  results: s.optional(s.array(s.lazy(() => resultInternalSchema))),
};

export const apiSearchResponseInternalSchema: Schema<ApiSearchResponse> = s.object<ApiSearchResponse>(
  apiSearchResponseProperties,
  { additionalProperties: s.json() },
);

export const apiSearchResponseSchema: Schema<ApiSearchResponse> = s.lazySchema(() =>
  s.object<ApiSearchResponse>(
    {
      ...apiSearchResponseProperties,
      results: s.optional(s.array(s.lazy(() => resultSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
