import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the capture resource created for this capture. */
export type CaptureId = string;

export const captureIdSchema: Schema<CaptureId> = s.of<CaptureId>(s.union([s.string()]));
