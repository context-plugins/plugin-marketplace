import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * End date of the billing plan, in YYYY-MM-DD format. The end date must align with the frequency
 * and the start date of the billing plan. If left blank, the subscription will continue
 * indefinitely unless it is cancelled by the shopper.
 */
export type Endsat = string;

export const endsatSchema: Schema<Endsat> = s.of<Endsat>(s.union([s.string()]));
