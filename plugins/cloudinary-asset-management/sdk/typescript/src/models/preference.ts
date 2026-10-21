import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * What the choice optimizes for:
 * * `balanced` (default): quality and cost weighted equally.
 * * `quality`: quality only; cost isn't weighed.
 * * `economy`: cost first, quality second.
 * * `balanced_fast`, `quality_fast`, `economy_fast`: as above, but also favor faster generation,
 *   and never pick a model that typically takes longer than 30 seconds.
 */
export const Preference = {
  Balanced: "balanced",
  Quality: "quality",
  Economy: "economy",
  BalancedFast: "balanced_fast",
  QualityFast: "quality_fast",
  EconomyFast: "economy_fast",
} as const;
export type Preference = (typeof Preference)[keyof typeof Preference] | (string & {});

export const preferenceSchema: EnumSchema<Preference> = s.enumOf<Preference>(Preference);
