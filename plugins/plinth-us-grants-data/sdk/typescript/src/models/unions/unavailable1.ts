import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Present only when the size could not be computed. The ranking above is unaffected., Present only
 * when the accounting failed. The totals in the response are unaffected — a failed measurement
 * never fails a correct answer., Present only when the size could not be computed. The ranking
 * above is unaffected., Present only when the size could not be computed. The ranking above is
 * unaffected., Present only when the size could not be computed. The ranking above is unaffected.
 */
export type Unavailable1 = string;

export const unavailable1Schema: Schema<Unavailable1> = s.of<Unavailable1>(s.union([s.string()]));
