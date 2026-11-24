import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Body returned on a request-level failure (400/404/409/429) so the caller knows why the request
 * was rejected.
 */
export type TriggerErrorResponse = {
  /** Human-readable description of why the request failed. */
  error: string;
};

export const triggerErrorResponseSchema: Schema<TriggerErrorResponse> = s.object<TriggerErrorResponse>({
  error: s.string(),
});
