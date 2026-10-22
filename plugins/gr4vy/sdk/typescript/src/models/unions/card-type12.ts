import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cardTypeEnumSchema, type CardTypeEnum } from "../card-type-enum.js";

/** The type of the card. */
export type CardType12 = CardTypeEnum;

export const cardType12Schema: Schema<CardType12> = s.of<CardType12>(
  s.union([s.lazy(() => cardTypeEnumSchema)]),
);
