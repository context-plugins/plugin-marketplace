import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RetryBuildInput = {
  /** Specifies the identifier of the build to restart. */
  id?: string;
  /**
   * A unique, case sensitive identifier you provide to ensure the idempotency of the RetryBuild
   * request. The token is included in the RetryBuild request and is valid for five minutes. If you
   * repeat the RetryBuild request with the same token, but change a parameter, CodeBuild returns a
   * parameter mismatch error.
   */
  idempotencyToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const retryBuildInputSchema: Schema<RetryBuildInput> = s.object<RetryBuildInput>(
  {
    id: s.optional(s.string()),
    idempotencyToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
