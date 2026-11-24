import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1UseragentparserRequest = {
  /** The user agent string to parse */
  ua: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1UseragentparserRequestSchema: Schema<V1UseragentparserRequest> =
  s.object<V1UseragentparserRequest>(
    {
      ua: s.string(),
    },
    { additionalProperties: s.json() },
  );
