import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** First name of the recipient at this address. */
export type FirstName6 = string;

export const firstName6Schema: Schema<FirstName6> = s.of<FirstName6>(s.union([s.string()]));
