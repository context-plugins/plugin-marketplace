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

export type HealthOverlayStatus = ActiveHealthOverlayStatus | NoActiveHealthOverlayStatus;

export const healthOverlayStatusSchema: Schema<HealthOverlayStatus> = s.of<HealthOverlayStatus>(
  s.union([s.lazy(() => activeHealthOverlayStatusSchema), s.lazy(() => noActiveHealthOverlayStatusSchema)]),
);
