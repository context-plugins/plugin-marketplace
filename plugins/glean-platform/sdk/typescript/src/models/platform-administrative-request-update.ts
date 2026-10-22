import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformRequestResolutionTarget2Schema,
  type PlatformRequestResolutionTarget2,
} from "./platform-request-resolution-target2.js";
import { platformRequestScope2Schema, type PlatformRequestScope2 } from "./platform-request-scope2.js";
import { statusSchema, type Status } from "./status.js";

/**
 * Resolve a pending request. PERIOD approval records a positive additive amount for the stored
 * current UTC month; expired approvals return 409. The existing backend consumes eligible USER
 * current-period grants without changing standing rules; no agent or other unsupported target
 * capacity is added. ONGOING approval is unavailable on this API and returns 503. GROUP and
 * DEPARTMENT resolution targets are not accepted for new approvals. Request identity and period
 * cannot change.
 */
export type PlatformAdministrativeRequestUpdate = {
  /** Requested terminal state. */
  status: Status;
  /** Positive increase amount to record, required only for approval. */
  approvedIncreaseAmount?: string;
  /** Approval scope; omission selects PERIOD. ONGOING returns 503 on this API. */
  scope?: PlatformRequestScope2;
  /** Approval breadth; USER or ALL only. Required for an ONGOING approval. */
  resolutionTarget?: PlatformRequestResolutionTarget2;
  /**
   * Not accepted for new approvals. Stored GROUP and DEPARTMENT records retain their identifiers in
   * request responses.
   */
  resolutionTargetId?: string;
  /** Optional note recorded when denying the request. */
  resolutionNote?: string;
};

export const platformAdministrativeRequestUpdateSchema: Schema<PlatformAdministrativeRequestUpdate> =
  s.object<PlatformAdministrativeRequestUpdate>({
    status: statusSchema,
    approvedIncreaseAmount: s.optional(s.string()),
    scope: s.optional(s.lazy(() => platformRequestScope2Schema)),
    resolutionTarget: s.optional(s.lazy(() => platformRequestResolutionTarget2Schema)),
    resolutionTargetId: s.optional(s.string()),
    resolutionNote: s.optional(s.string()),
    _keysMap: {
      approvedIncreaseAmount: "approved_increase_amount",
      resolutionTarget: "resolution_target",
      resolutionTargetId: "resolution_target_id",
      resolutionNote: "resolution_note",
    },
  });
