import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * SEC Form 4 insider rows only — the holding pool the transaction touched. `null` for non-insider
 * news. A single Form 4 can surface a `direct` and an `indirect` leg of the same plan as two
 * separate articles (same filing URL, same date); they are distinct economic events, so SUM them
 * rather than dedupe by URL/accession.
 */
export const OwnershipForm = {
  Direct: "direct",
  Indirect: "indirect",
} as const;
export type OwnershipForm = (typeof OwnershipForm)[keyof typeof OwnershipForm] | (string & {});

export const ownershipFormSchema: EnumSchema<OwnershipForm> = s.enumOf<OwnershipForm>(OwnershipForm);
