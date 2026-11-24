import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A response confirming caller's domain and email. */
export type ValidateResponse = {
  domain?: string;
  email?: string;
  /**
   * The caller's own effective permission names (e.g. "CloudAnalyticsReadOnly"), not opaque
   * permission IDs. Empty for a DoiT employee token, which is not scoped to a fixed permission set.
   */
  permissions?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validateResponseSchema: Schema<ValidateResponse> = s.object<ValidateResponse>(
  {
    domain: s.optional(s.string()),
    email: s.optional(s.string()),
    permissions: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
