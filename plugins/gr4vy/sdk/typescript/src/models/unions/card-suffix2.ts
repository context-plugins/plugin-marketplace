import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The last 4 digits of the original card used to generate the token. */
export type CardSuffix2 = string;

export const cardSuffix2Schema: Schema<CardSuffix2> = s.of<CardSuffix2>(s.union([s.string()]));
