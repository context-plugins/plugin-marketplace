import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The date and time when the monitoring incident was closed. */
export type ClosedAt = Date;

export const closedAtSchema: Schema<ClosedAt> = s.of<ClosedAt>(s.union([s.dateTime()]));
