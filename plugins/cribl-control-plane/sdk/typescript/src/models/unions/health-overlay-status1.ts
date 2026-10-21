import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  activeHealthOverlayStatusSchema,
  type ActiveHealthOverlayStatus,
} from "../active-health-overlay-status.js";
import {
  noActiveHealthOverlayStatusSchema,
  type NoActiveHealthOverlayStatus,
} from "../no-active-health-overlay-status.js";

/** Overlay state for this process. */
export type HealthOverlayStatus1 = ActiveHealthOverlayStatus | NoActiveHealthOverlayStatus;

export const healthOverlayStatus1Schema: Schema<HealthOverlayStatus1> = s.of<HealthOverlayStatus1>(
  s.union([s.lazy(() => activeHealthOverlayStatusSchema), s.lazy(() => noActiveHealthOverlayStatusSchema)]),
);
