import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Body returned on a request-level failure (400/404/409/429) so the caller knows why the request
 * was rejected.
 */
export type TriggerErrorResponseError = {
  /** Human-readable description of why the request failed. */
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const triggerErrorResponseErrorSchema: Schema<TriggerErrorResponseError> =
  s.object<TriggerErrorResponseError>(
    {
      error: s.string(),
    },
    { additionalProperties: s.json() },
  );
