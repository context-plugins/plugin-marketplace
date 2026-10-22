import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NoActiveHealthOverlayStatus = {
  /** Current overlay state. @default "inactive" */
  state?: "inactive";
};

export const noActiveHealthOverlayStatusSchema: Schema<NoActiveHealthOverlayStatus> =
  s.object<NoActiveHealthOverlayStatus>({
    state: s.defaulted(s.literal("inactive"), "inactive"),
  });
