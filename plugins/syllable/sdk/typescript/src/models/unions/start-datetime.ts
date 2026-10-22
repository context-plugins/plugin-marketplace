import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Target session timestamp the workflow (backfill) should start. An empty value indicates start on
 * activation - live sessions only
 */
export type StartDatetime = Date;

export const startDatetimeSchema: Schema<StartDatetime> = s.of<StartDatetime>(s.union([s.dateTime()]));
