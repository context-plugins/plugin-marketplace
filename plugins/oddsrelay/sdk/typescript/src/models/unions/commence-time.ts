import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CommenceTime = string | number;

export const commenceTimeSchema: Schema<CommenceTime> = s.of<CommenceTime>(s.union([s.string(), s.int()]));
