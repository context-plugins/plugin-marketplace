import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformRequestResolutionTarget2Schema,
  type PlatformRequestResolutionTarget2,
} from "./platform-request-resolution-target2.js";
import { platformRequestScope2Schema, type PlatformRequestScope2 } from "./platform-request-scope2.js";
import { statusSchema, type Status } from "./status.js";

/** Record a PERIOD approval decision or denial of a pending request. */
export type PlatformAdministrativeRequestUpdate1 = {
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

export const platformAdministrativeRequestUpdate1Schema: Schema<PlatformAdministrativeRequestUpdate1> =
  s.object<PlatformAdministrativeRequestUpdate1>({
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
