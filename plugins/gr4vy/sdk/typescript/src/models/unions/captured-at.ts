import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The date and time the capture was completed. */
export type CapturedAt = Date;

export const capturedAtSchema: Schema<CapturedAt> = s.of<CapturedAt>(s.union([s.dateTime()]));
