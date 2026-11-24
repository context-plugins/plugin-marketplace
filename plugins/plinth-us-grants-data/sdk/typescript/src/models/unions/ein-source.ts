import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * How the recipient EIN was arrived at, with the measured precision each carries in `match_prob`.
 * Ordered strongest first; the resolver applies them in this order and a later rule only ever sees
 * what the earlier ones declined. `filed` (0.995) the filer stated it on the return.
 * `override_human` (0.99) an adjudicated correction. `override_keyerror` (0.98) a filer-stated EIN
 * that exists in no register and is one identifiable keying slip from the EIN of the organisation
 * the name resolves to — a correction of the filer, not of us. `name` (0.970) exact normalised
 * name, unique within state. `registry-dominant` (0.970) an ambiguous alias where one EIN holds
 * >=90% of the distinct funders who file that name. `fuzzy` (0.961) one edit from a registered
 * name, with the ZIP agreeing. `override_llm` (0.95) an LLM adjudication of an ambiguous string.
 * `registry` (0.944) the Schedule I alias registry, gated at 2+ distinct funders. `address` (0.944)
 * address-as-key with a 2-edit name gate. `zip` (0.934) same name, disambiguated by recipient ZIP.
 * `street` (0.834) same name, disambiguated by street — the weakest rule; exclude it if precision
 * matters more than reach. `model` a per-row calibrated posterior, see `match_prob`. `null`: no
 * recipient EIN, or provenance predating this field. Filter to `filed` for anything load-bearing.
 */
export type EinSource = string;

export const einSourceSchema: Schema<EinSource> = s.of<EinSource>(s.union([s.string()]));
