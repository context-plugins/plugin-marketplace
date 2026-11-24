import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** System instructions for the model. */
export type Instructions1 = string;

export const instructions1Schema: Schema<Instructions1> = s.of<Instructions1>(s.union([s.string()]));
