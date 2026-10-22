import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MaxContextLength = number;

export const maxContextLengthSchema: Schema<MaxContextLength> = s.of<MaxContextLength>(s.union([s.int()]));
