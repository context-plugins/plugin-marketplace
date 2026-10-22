import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID for the payout service. */
export type Id8 = string;

export const id8Schema: Schema<Id8> = s.of<Id8>(s.union([s.string()]));
