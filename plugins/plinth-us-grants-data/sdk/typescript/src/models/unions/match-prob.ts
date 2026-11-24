import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * P(this recipient EIN is correct), on every resolved row. The GRANULARITY differs and `ein_source`
 * says which: rows resolved by the model carry a per-row calibrated posterior (isotonic-fitted on
 * held-out validation); rows resolved by a rule carry that rule's measured held-out precision — a
 * per-rule estimate, not a posterior. Null means the row is unresolved, or its provenance predates
 * the field. Filter on it and you keep the rule-resolved majority as well as the model's rows. ⚠️
 * THE MODEL'S VALUES TOP OUT BELOW 1. Isotonic calibration can only emit values it observed on
 * validation, so model rows span roughly 0.95-0.965 and NOTHING carries a model probability above
 * ~0.965. A filter of `match_prob > 0.97` therefore returns zero model rows while still returning
 * `filed` (0.995) and `name` (0.970) — it reads as a confidence threshold and acts as a provenance
 * filter. Use `ein_source` if that is what you meant.
 */
export type MatchProb = number;

export const matchProbSchema: Schema<MatchProb> = s.of<MatchProb>(s.union([s.float64()]));
