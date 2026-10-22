import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RandomizationUnitInput = {
  /** The unit of randomization. Must match the key of an existing context kind in this project. */
  randomizationUnit: string;
  /**
   * If true, any experiment iterations created within this project will default to using this
   * randomization unit. A project can only have one default randomization unit.
   */
  default?: boolean;
  /** (deprecated) This field is deprecated and will be removed. Use randomizationUnit instead. */
  standardRandomizationUnit?: string;
};

export const randomizationUnitInputSchema: Schema<RandomizationUnitInput> = s.object<RandomizationUnitInput>({
  randomizationUnit: s.string(),
  default: s.optional(s.boolean()),
  standardRandomizationUnit: s.optional(s.string()),
});
