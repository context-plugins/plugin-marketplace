import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { regionSchema, type Region } from "./region.js";

/** The input of a trigger action to run a Match Booster enrichment. */
export type MatchBoosterTriggerInput = {
  /** Whether to re-enrich all rows instead of only new/changed rows. @default false */
  forceFullEnrichment?: boolean;
  /**
   * The Match Booster region to run the enrichment in. Defaults to the model's configured region.
   */
  region?: Region;
};

export const matchBoosterTriggerInputSchema: Schema<MatchBoosterTriggerInput> =
  s.object<MatchBoosterTriggerInput>({
    forceFullEnrichment: s.defaulted(s.boolean(), false),
    region: s.optional(s.lazy(() => regionSchema)),
  });
