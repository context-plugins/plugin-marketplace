import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1YmmOptionsResponse = {
  success?: boolean;
  input?: Record<string, unknown>;
  /**
   * Optional guidance when the returned layer differs from the requested dimension or when
   * explaining how to get better results.
   */
  message?: string;
  years?: number[];
  makes?: string[];
  models?: string[];
  trims?: string[];
  variants?: string[];
  /**
   * Present only for bulk variants (`dimension=variants` + year + make, no model). Number of
   * distinct models, which is also the amount billed — except a zero-match query, which returns 0
   * but still bills a minimum of 1 unit.
   */
  modelCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1YmmOptionsResponseSchema: Schema<V1YmmOptionsResponse> = s.object<V1YmmOptionsResponse>(
  {
    success: s.optional(s.boolean()),
    input: s.optional(s.record(s.string(), s.unknown())),
    message: s.optional(s.string()),
    years: s.optional(s.array(s.int())),
    makes: s.optional(s.array(s.string())),
    models: s.optional(s.array(s.string())),
    trims: s.optional(s.array(s.string())),
    variants: s.optional(s.array(s.string())),
    modelCount: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
