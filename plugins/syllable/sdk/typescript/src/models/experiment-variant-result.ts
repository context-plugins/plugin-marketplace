import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** How much traffic one variant of an experiment handled. */
export type ExperimentVariantResult = {
  /** The internal ID of the variant */
  variantId: number;
  /** How many sessions this variant answered */
  sessionCount: number;
};

export const experimentVariantResultSchema: Schema<ExperimentVariantResult> =
  s.object<ExperimentVariantResult>({
    variantId: s.int(),
    sessionCount: s.int(),
    _keysMap: {
      variantId: "variant_id",
      sessionCount: "session_count",
    },
  });
