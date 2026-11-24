import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error = {
  /**
   * Stable, machine-matchable error code (e.g. missing_input, invalid_filters, invalid_search_url).
   * Match on code, never on message.
   */
  code: string;
  /** Human-readable message; may evolve. Do not match on this. */
  message: string;
  details?: Record<string, unknown>;
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorSchema: Schema<Error> = s.object<Error>(
  {
    code: s.string(),
    message: s.string(),
    details: s.optional(s.record(s.string(), s.unknown())),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  },
  { additionalProperties: s.json() },
);
