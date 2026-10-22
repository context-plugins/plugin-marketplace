import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Timestamp at which the most recent processing attempt started */
export type StartedAt1 = Date;

export const startedAt1Schema: Schema<StartedAt1> = s.of<StartedAt1>(s.union([s.dateTime()]));
