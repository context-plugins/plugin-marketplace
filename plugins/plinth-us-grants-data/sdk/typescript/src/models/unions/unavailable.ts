import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Present only when the accounting failed. The totals in the response are unaffected — a failed
 * measurement never fails a correct answer., Present only when the size could not be computed. The
 * ranking above is unaffected., Present only when the accounting failed. The totals in the response
 * are unaffected — a failed measurement never fails a correct answer., Present only when the
 * accounting failed. The totals in the response are unaffected — a failed measurement never fails a
 * correct answer., Present only when the accounting failed. The totals in the response are
 * unaffected — a failed measurement never fails a correct answer.
 */
export type Unavailable = string;

export const unavailableSchema: Schema<Unavailable> = s.of<Unavailable>(s.union([s.string()]));
