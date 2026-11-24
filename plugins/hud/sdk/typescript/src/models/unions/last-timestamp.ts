import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type LastTimestamp = number;

export const lastTimestampSchema: Schema<LastTimestamp> = s.of<LastTimestamp>(s.union([s.int()]));
