import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** First name of the beneficiary. */
export type FirstName5 = string;

export const firstName5Schema: Schema<FirstName5> = s.of<FirstName5>(s.union([s.string()]));
