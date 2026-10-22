import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Timeout in minutes before instance auto-termination */
export type TimeoutMinutes = number;

export const timeoutMinutesSchema: Schema<TimeoutMinutes> = s.of<TimeoutMinutes>(s.union([s.int()]));
