import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Accelerator requirement. */
export type AcceleratorRequirement = {
  /** Specifies the instance type. */
  type: string;
  /** Specifies the number of instances. */
  count: number;
};

export const acceleratorRequirementSchema: Schema<AcceleratorRequirement> = s.object<AcceleratorRequirement>({
  type: s.string(),
  count: s.int(),
});
