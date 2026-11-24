import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1TcgplayerSold401Error = {
  code?: string;
  error?: string;
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1TcgplayerSold401ErrorSchema: Schema<V1TcgplayerSold401Error> =
  s.object<V1TcgplayerSold401Error>(
    {
      code: s.optional(s.string()),
      error: s.optional(s.string()),
      requestId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
