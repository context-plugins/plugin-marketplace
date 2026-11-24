import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1LienTheftResponse = {
  success?: boolean;
  input?: Record<string, unknown>;
  timestamp?: string;
  year?: number;
  make?: string;
  model?: string;
  type?: string;
  events?: Record<string, unknown>[];
  trimData?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1LienTheftResponseSchema: Schema<V1LienTheftResponse> = s.object<V1LienTheftResponse>(
  {
    success: s.optional(s.boolean()),
    input: s.optional(s.record(s.string(), s.unknown())),
    timestamp: s.optional(s.string()),
    year: s.optional(s.int()),
    make: s.optional(s.string()),
    model: s.optional(s.string()),
    type: s.optional(s.string()),
    events: s.optional(s.array(s.record(s.string(), s.unknown()))),
    trimData: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      trimData: "trim_data",
    },
  },
  { additionalProperties: s.json() },
);
