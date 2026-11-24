import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Newest fiscal year any row falls in — max(tax_year), including years still arriving. Sync against
 * this; do not quote it as the coverage span.
 */
export type LastFiscalYear = number;

export const lastFiscalYearSchema: Schema<LastFiscalYear> = s.of<LastFiscalYear>(s.union([s.int()]));
