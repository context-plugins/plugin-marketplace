import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BooleanFlagDefaults = {
  /** The display name for the true variation, displayed in the LaunchDarkly user interface */
  trueDisplayName: string;
  /** The display name for the false variation, displayed in the LaunchDarkly user interface */
  falseDisplayName: string;
  /** The description for the true variation */
  trueDescription: string;
  /** The description for the false variation */
  falseDescription: string;
  /**
   * The variation index of the flag variation to use for the default targeting behavior when a
   * flag's targeting is on and the target did not match any rules
   */
  onVariation: number;
  /**
   * The variation index of the flag variation to use for the default targeting behavior when a
   * flag's targeting is off
   */
  offVariation: number;
};

export const booleanFlagDefaultsSchema: Schema<BooleanFlagDefaults> = s.object<BooleanFlagDefaults>({
  trueDisplayName: s.string(),
  falseDisplayName: s.string(),
  trueDescription: s.string(),
  falseDescription: s.string(),
  onVariation: s.int(),
  offVariation: s.int(),
});
