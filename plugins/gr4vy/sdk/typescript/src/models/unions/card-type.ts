import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The payment scheme of the card. */
export type CardType = string;

export const cardTypeSchema: Schema<CardType> = s.of<CardType>(s.union([s.string()]));
