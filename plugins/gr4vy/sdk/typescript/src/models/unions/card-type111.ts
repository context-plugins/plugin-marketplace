import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cardTypeEnumSchema, type CardTypeEnum } from "../card-type-enum.js";

/** The payment scheme of the card. */
export type CardType111 = CardTypeEnum;

export const cardType111Schema: Schema<CardType111> = s.of<CardType111>(
  s.union([s.lazy(() => cardTypeEnumSchema)]),
);
