import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * ISO 4217 currency code (3 characters). If left null, the configuration will apply to all
 * currencies.
 */
export type Currency5 = string;

export const currency5Schema: Schema<Currency5> = s.of<Currency5>(s.union([s.string()]));
