import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MaxOutputLength = number;

export const maxOutputLengthSchema: Schema<MaxOutputLength> = s.of<MaxOutputLength>(s.union([s.int()]));
