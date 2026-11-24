import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type NumTraces = number;

export const numTracesSchema: Schema<NumTraces> = s.of<NumTraces>(s.union([s.int()]));
