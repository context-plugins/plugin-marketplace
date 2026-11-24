import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Why a terminal request did not complete. */
export type ReasonDoiTSignupApi = {
  code?: string;
  detail?: string;
  retryable?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reasonDoiTSignupApiSchema: Schema<ReasonDoiTSignupApi> = s.object<ReasonDoiTSignupApi>(
  {
    code: s.optional(s.string()),
    detail: s.optional(s.string()),
    retryable: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
