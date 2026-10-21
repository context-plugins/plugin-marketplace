import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Last name of the beneficiary. */
export type LastName5 = string;

export const lastName5Schema: Schema<LastName5> = s.of<LastName5>(s.union([s.string()]));
