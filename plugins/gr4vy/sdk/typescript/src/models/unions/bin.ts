import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The first 6 digit of the card. */
export type Bin = string;

export const binSchema: Schema<Bin> = s.of<Bin>(s.union([s.string()]));
