import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID for the payout. */
export type Id9 = string;

export const id9Schema: Schema<Id9> = s.of<Id9>(s.union([s.string()]));
