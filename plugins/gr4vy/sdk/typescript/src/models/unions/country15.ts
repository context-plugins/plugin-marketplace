import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The two-letter ISO country code. */
export type Country15 = string;

export const country15Schema: Schema<Country15> = s.of<Country15>(s.union([s.string()]));
