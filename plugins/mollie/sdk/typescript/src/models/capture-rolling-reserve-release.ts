import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CaptureRollingReserveRelease = {
  paymentId?: string;
  paymentDescription?: string;
  captureId?: string;
  captureDescription?: string;
};

export const captureRollingReserveReleaseSchema: Schema<CaptureRollingReserveRelease> =
  s.object<CaptureRollingReserveRelease>({
    paymentId: s.optional(s.string()),
    paymentDescription: s.optional(s.string()),
    captureId: s.optional(s.string()),
    captureDescription: s.optional(s.string()),
  });
