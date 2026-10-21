import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The locale for the payment link. */
export type Locale = string;

export const localeSchema: Schema<Locale> = s.of<Locale>(s.union([s.string()]));
