import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. Kernel */
export const Kernel = {
  KernelUnspecified: "KERNEL_UNSPECIFIED",
  Python: "PYTHON",
  Scala: "SCALA",
} as const;
export type Kernel = (typeof Kernel)[keyof typeof Kernel] | (string & {});

export const kernelSchema: EnumSchema<Kernel> = s.enumOf<Kernel>(Kernel);
