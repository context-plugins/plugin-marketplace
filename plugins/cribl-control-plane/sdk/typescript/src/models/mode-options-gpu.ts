import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select the level of detail for GPU metrics */
export const ModeOptionsGpu = {
  Basic: "basic",
  All: "all",
  Custom: "custom",
  Disabled: "disabled",
} as const;
export type ModeOptionsGpu = (typeof ModeOptionsGpu)[keyof typeof ModeOptionsGpu] | (string & {});

export const modeOptionsGpuSchema: EnumSchema<ModeOptionsGpu> = s.enumOf<ModeOptionsGpu>(ModeOptionsGpu);
