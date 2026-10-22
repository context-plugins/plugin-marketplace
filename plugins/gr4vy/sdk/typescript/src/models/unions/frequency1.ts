import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The frequency at which the shopper will be charged. Possible values: weekly, monthly, quarterly,
 * half-yearly, and yearly.
 */
export type Frequency1 = string;

export const frequency1Schema: Schema<Frequency1> = s.of<Frequency1>(s.union([s.string()]));
