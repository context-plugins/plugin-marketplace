import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Page size. Default 25, capped at 1000 (Candid's ceiling is 25). */
export type Size = number;

export const sizeSchema: Schema<Size> = s.of<Size>(s.union([s.int()]));
