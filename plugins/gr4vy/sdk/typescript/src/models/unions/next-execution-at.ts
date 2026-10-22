import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The next scheduled execution time for the report. */
export type NextExecutionAt = Date;

export const nextExecutionAtSchema: Schema<NextExecutionAt> = s.of<NextExecutionAt>(s.union([s.dateTime()]));
