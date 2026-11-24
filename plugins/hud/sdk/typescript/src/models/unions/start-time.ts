import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type StartTime = Date;

export const startTimeSchema: Schema<StartTime> = s.of<StartTime>(s.union([s.dateTime()]));
