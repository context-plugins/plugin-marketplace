import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1QuerystringbuilderRequest = {
  /** JSON object of parameters */
  params: string;
  /** URL encode parameter values */
  encode?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1QuerystringbuilderRequestSchema: Schema<V1QuerystringbuilderRequest> =
  s.object<V1QuerystringbuilderRequest>(
    {
      params: s.string(),
      encode: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
