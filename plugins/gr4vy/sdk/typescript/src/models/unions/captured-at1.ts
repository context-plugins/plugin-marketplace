import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The date this transaction was captured at. */
export type CapturedAt1 = Date;

export const capturedAt1Schema: Schema<CapturedAt1> = s.of<CapturedAt1>(s.union([s.dateTime()]));
