import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Distinct recipients we can identify as organizations. Grant lines whose recipient is a
 * placeholder ('various individuals', 'see attached') or an individual-assistance program's
 * beneficiary do not count toward this, so it is not the count of distinct recipient_raw strings —
 * for funders that give to individuals the two differ by orders of magnitude. CHANGED 2026-08: this
 * previously counted distinct raw strings, and reads taken before that are not comparable. The
 * excluded money is reported in x_plinth.unidentified.
 */
export type RecipientCount = number;

export const recipientCountSchema: Schema<RecipientCount> = s.of<RecipientCount>(s.union([s.int()]));
