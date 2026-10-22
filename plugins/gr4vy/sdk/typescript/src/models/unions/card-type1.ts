import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The type of the card. */
export type CardType1 = string;

export const cardType1Schema: Schema<CardType1> = s.of<CardType1>(s.union([s.string()]));
