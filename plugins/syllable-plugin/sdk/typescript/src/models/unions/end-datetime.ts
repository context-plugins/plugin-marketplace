import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Target session timestamp the workflow (backfill) should end. An empty value indicates no end,
 * i.e., include live sessions until deactivation
 */
export type EndDatetime = Date;

export const endDatetimeSchema: Schema<EndDatetime> = s.of<EndDatetime>(s.union([s.dateTime()]));
