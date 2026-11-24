import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1SqlexplainerRequest = {
  /** The SQL query to explain */
  query: string;
  /** Explanation detail level: brief, standard, or detailed */
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1SqlexplainerRequestSchema: Schema<V1SqlexplainerRequest> = s.object<V1SqlexplainerRequest>(
  {
    query: s.string(),
    detail: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
