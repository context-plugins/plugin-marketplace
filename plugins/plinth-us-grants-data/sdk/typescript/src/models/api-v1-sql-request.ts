import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1SqlRequest = {
  /** A single read-only SELECT (or WITH ... SELECT) statement. */
  sql: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SqlRequestSchema: Schema<ApiV1SqlRequest> = s.object<ApiV1SqlRequest>(
  {
    sql: s.string(),
  },
  { additionalProperties: s.json() },
);
