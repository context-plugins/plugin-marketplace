import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1PlaybooksUseRequest = {
  /** The prompt's inputs, by name; a placeholder not given stays in the words */
  inputs?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1PlaybooksUseRequestProperties: s.Shape<ApiV1PlaybooksUseRequest> = {
  inputs: s.optional(s.record(s.string(), s.string())),
};

export const apiV1PlaybooksUseRequestInternalSchema: Schema<ApiV1PlaybooksUseRequest> =
  s.object<ApiV1PlaybooksUseRequest>(apiV1PlaybooksUseRequestProperties, { additionalProperties: s.json() });

export const apiV1PlaybooksUseRequestSchema: Schema<ApiV1PlaybooksUseRequest> = s.lazySchema(() =>
  s.object<ApiV1PlaybooksUseRequest>(
    {
      ...apiV1PlaybooksUseRequestProperties,
      inputs: s.optional(s.record(s.string(), s.string().check(s.maxLength(4000)))),
    },
    { additionalProperties: s.json() },
  ),
);
