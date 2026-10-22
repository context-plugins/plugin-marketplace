import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roleSchema, type Role } from "./role.js";
import { status1Schema, type Status1 } from "./status1.js";
import { healthOverlayStatus1Schema, type HealthOverlayStatus1 } from "./unions/health-overlay-status1.js";

/** Health status of the Leader or Worker Node. */
export type HealthServerStatusError = {
  /**
   * Whether this node is currently the captain (job scheduling coordinator) in a Collectors HA
   * deployment.
   */
  isCaptain?: boolean;
  /** Overlay state for this process. */
  overlay: HealthOverlayStatus1;
  /** Leader Node role: <code>primary</code> or <code>standby</code>. */
  role?: Role;
  /** Timestamp (in Unix time) when the Cribl process started. */
  startTime: number;
  /** Health state: <code>healthy</code>, <code>standby</code>, or <code>shutting down</code>. */
  status: Status1;
};

export const healthServerStatusErrorSchema: Schema<HealthServerStatusError> =
  s.object<HealthServerStatusError>({
    isCaptain: s.optional(s.boolean()),
    overlay: healthOverlayStatus1Schema,
    role: s.optional(s.lazy(() => roleSchema)),
    startTime: s.int(),
    status: status1Schema,
  });
