import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusHudPlatformRolloutsApiSchema,
  type StatusHudPlatformRolloutsApi,
} from "./status-hud-platform-rollouts-api.js";

/**
 * One trace's cancel result.
 *
 * Cancellation is two-phase: `accepted` means the trace was marked `cancelling` and finalization
 * enqueued; `noop` means nothing transitioned (already terminal, or not found).
 */
export type CancelResponse = {
  status: StatusHudPlatformRolloutsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelResponseSchema: Schema<CancelResponse> = s.object<CancelResponse>(
  {
    status: statusHudPlatformRolloutsApiSchema,
  },
  { additionalProperties: s.json() },
);
