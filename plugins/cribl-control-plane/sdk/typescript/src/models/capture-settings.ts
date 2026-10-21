import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { whereToCaptureSchema, type WhereToCapture } from "./where-to-capture.js";

/** Capture Settings */
export type CaptureSettings = {
  /** Amount of time to keep capture open, in seconds */
  duration?: number;
  /** Maximum number of events to capture */
  maxEvents?: number;
  /** Where to capture */
  level?: WhereToCapture;
};

export const captureSettingsSchema: Schema<CaptureSettings> = s.object<CaptureSettings>({
  duration: s.optional(s.float64()),
  maxEvents: s.optional(s.float64()),
  level: s.optional(s.lazy(() => whereToCaptureSchema)),
});
