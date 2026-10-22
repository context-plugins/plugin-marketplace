import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions that were processed in the specified currency.
 * The currency code should be in the ISO 4217 format.<br/>**Important:** This query parameter is
 * **required** when the `metric` is set to `volume`.
 */
export type Currency7 = string[];

export const currency7Schema: Schema<Currency7> = s.of<Currency7>(s.union([s.array(s.string())]));
