import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RandomizationUnitRep = {
  /** The unit of randomization. Defaults to user. */
  randomizationUnit?: string;
  /** Whether this randomization unit is the default for experiments */
  default?: boolean;
  hidden?: boolean;
  /** The display name for the randomization unit, displayed in the LaunchDarkly user interface. */
  displayName?: string;
};

export const randomizationUnitRepSchema: Schema<RandomizationUnitRep> = s.object<RandomizationUnitRep>({
  randomizationUnit: s.optional(s.string()),
  default: s.optional(s.boolean()),
  hidden: s.optional(s.boolean()),
  displayName: s.optional(s.string()),
  _keysMap: {
    hidden: "_hidden",
    displayName: "_displayName",
  },
});
