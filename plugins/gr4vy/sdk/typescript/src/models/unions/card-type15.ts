import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cardTypeEnumSchema, type CardTypeEnum } from "../card-type-enum.js";

export type CardType15 = CardTypeEnum;

export const cardType15Schema: Schema<CardType15> = s.of<CardType15>(
  s.union([s.lazy(() => cardTypeEnumSchema)]),
);
