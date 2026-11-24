import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** File size in bytes. */
export type Size = number | string;

export const sizeSchema: Schema<Size> = s.of<Size>(s.union([s.int(), s.string()]));
