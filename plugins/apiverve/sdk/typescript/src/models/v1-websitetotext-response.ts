import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1WebsitetotextResponse = {
  /** status */
  status?: string;
  /** error */
  error?: string;
  /** data */
  data?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1WebsitetotextResponseSchema: Schema<V1WebsitetotextResponse> =
  s.object<V1WebsitetotextResponse>(
    {
      status: s.optional(s.string()),
      error: s.optional(s.string()),
      data: s.optional(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
