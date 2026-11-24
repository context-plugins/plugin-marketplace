import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** QueryOverride. Query message defines query override for HTTP targets. */
export type QueryOverride = {
  /** The query parameters (e.g., qparam1=123&qparam2=456). Default is an empty string. */
  queryParams?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const queryOverrideSchema: Schema<QueryOverride> = s.object<QueryOverride>(
  {
    queryParams: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
