import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  statusReasonCodeResponseSchema,
  type StatusReasonCodeResponse,
} from "./status-reason-code-response.js";

/**
 * A human-readable reason explaining the current status of the transfer. Only populated when the
 * transfer has reached a terminal status of `failed`, `rejected`, or `blocked`.
 *
 * This field is `null` for transfers that have not reached one of these statuses.
 */
export type StatusReason2 = {
  /** A machine-readable code indicating the reason for the transfer's terminal status. */
  code?: StatusReasonCodeResponse;
  /**
   * Provides further details about failure indicated. This field is only populated if the`code`
   * field is set to `error`.
   */
  message?: string;
};

export const statusReason2Schema: Schema<StatusReason2> = s.object<StatusReason2>({
  code: s.optional(s.lazy(() => statusReasonCodeResponseSchema)),
  message: s.optional(s.string()),
});
