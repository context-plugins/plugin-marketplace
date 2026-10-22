import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Brief description of the order or any comment you wish to add to the order. */
export type Comments1 = string;

export const comments1Schema: Schema<Comments1> = s.of<Comments1>(s.union([s.string()]));
