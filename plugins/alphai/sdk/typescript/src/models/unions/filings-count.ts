import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type FilingsCount = number;

export const filingsCountSchema: Schema<FilingsCount> = s.of<FilingsCount>(s.union([s.int()]));
