import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Size = number;

export const sizeSchema: Schema<Size> = s.of<Size>(s.union([s.int()]));
