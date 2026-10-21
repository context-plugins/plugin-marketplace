import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MaxInputLength = number;

export const maxInputLengthSchema: Schema<MaxInputLength> = s.of<MaxInputLength>(s.union([s.int()]));
