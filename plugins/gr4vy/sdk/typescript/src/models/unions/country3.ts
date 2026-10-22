import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The 2-letter ISO 3166-1 alpha-2 country code for the transaction. Used to filter payment services
 * for processing.
 */
export type Country3 = string;

export const country3Schema: Schema<Country3> = s.of<Country3>(s.union([s.string()]));
