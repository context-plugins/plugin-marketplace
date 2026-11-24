import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Timestamp when the session was stopped (None if still active) */
export type FinishedAt = Date;

export const finishedAtSchema: Schema<FinishedAt> = s.of<FinishedAt>(s.union([s.dateTime()]));
