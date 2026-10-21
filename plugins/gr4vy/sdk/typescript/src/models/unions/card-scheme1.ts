import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The original card scheme for which the token was generated. */
export type CardScheme1 = string;

export const cardScheme1Schema: Schema<CardScheme1> = s.of<CardScheme1>(s.union([s.string()]));
