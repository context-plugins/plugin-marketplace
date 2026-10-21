import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ActiveHealthOverlayStatus = {
  /** Current overlay state. @default "active" */
  state?: "active";
};

export const activeHealthOverlayStatusSchema: Schema<ActiveHealthOverlayStatus> =
  s.object<ActiveHealthOverlayStatus>({
    state: s.defaulted(s.literal("active"), "active"),
  });
