import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cardTypeEnumSchema, type CardTypeEnum } from "../card-type-enum.js";

/** The type of the card used */
export type CardType1Model = CardTypeEnum;

export const cardType1ModelSchema: Schema<CardType1Model> = s.of<CardType1Model>(
  s.union([s.lazy(() => cardTypeEnumSchema)]),
);
