import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Return only usage for the specified GPU types. When this filter is given, `gpu_usage` and
 * `reserved_gpu_usage` will be provided if present; request, token, and audio usage fields are
 * omitted. Combining `gpu_types` with `product_types=model_apis` is rejected with HTTP 400.
 */
export type GpuTypes = string[];

export const gpuTypesSchema: Schema<GpuTypes> = s.of<GpuTypes>(s.union([s.array(s.string())]));
