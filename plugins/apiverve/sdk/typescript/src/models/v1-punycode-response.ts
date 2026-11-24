import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1PunycodeResponse = {
  /** status */
  status?: string;
  /** error */
  error?: string;
  /** data */
  data?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1PunycodeResponseSchema: Schema<V1PunycodeResponse> = s.object<V1PunycodeResponse>(
  {
    status: s.optional(s.string()),
    error: s.optional(s.string()),
    data: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
