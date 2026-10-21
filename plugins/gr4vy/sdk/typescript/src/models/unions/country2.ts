import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The country the card was issued in. */
export type Country2 = string;

export const country2Schema: Schema<Country2> = s.of<Country2>(s.union([s.string()]));
