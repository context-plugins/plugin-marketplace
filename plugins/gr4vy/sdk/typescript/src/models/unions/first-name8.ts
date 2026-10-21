import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** First name of the buyer to match. */
export type FirstName8 = string;

export const firstName8Schema: Schema<FirstName8> = s.of<FirstName8>(s.union([s.string()]));
