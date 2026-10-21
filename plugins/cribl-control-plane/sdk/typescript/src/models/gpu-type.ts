import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { modeOptionsGpuSchema, type ModeOptionsGpu } from "./mode-options-gpu.js";

/** Select the level of detail for GPU metrics */
export type GpuType = {
  /** Select the level of detail for GPU metrics */
  mode?: ModeOptionsGpu;
  /** Generate metrics for each GPU */
  perGpu?: boolean;
  /** Generate full GPU metrics */
  detail?: boolean;
};

export const gpuTypeSchema: Schema<GpuType> = s.object<GpuType>({
  mode: s.optional(s.lazy(() => modeOptionsGpuSchema)),
  perGpu: s.optional(s.boolean()),
  detail: s.optional(s.boolean()),
});
