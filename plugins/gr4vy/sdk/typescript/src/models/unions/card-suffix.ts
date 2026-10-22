import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The last 4 digits of the original card used to generate the token. */
export type CardSuffix = string;

export const cardSuffixSchema: Schema<CardSuffix> = s.of<CardSuffix>(s.union([s.string()]));
