import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Model quantization level. */
export type Quantization = string;

export const quantizationSchema: Schema<Quantization> = s.of<Quantization>(s.union([s.string()]));
