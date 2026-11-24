import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1VinocrResponse = {
  success?: boolean;
  vin?: string;
  box?: Record<string, unknown>;
  confidence?: number;
  candidates?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1VinocrResponseSchema: Schema<V1VinocrResponse> = s.object<V1VinocrResponse>(
  {
    success: s.optional(s.boolean()),
    vin: s.optional(s.string()),
    box: s.optional(s.record(s.string(), s.unknown())),
    confidence: s.optional(s.float64()),
    candidates: s.optional(s.array(s.record(s.string(), s.unknown()))),
  },
  { additionalProperties: s.json() },
);
