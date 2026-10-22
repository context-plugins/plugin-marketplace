import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The timestamp of the call's beginning */
export type StartTime1 = Date;

export const startTime1Schema: Schema<StartTime1> = s.of<StartTime1>(s.union([s.dateTime()]));
