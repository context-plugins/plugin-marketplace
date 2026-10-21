import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cardSchemeSchema, type CardScheme } from "../card-scheme.js";

/** The original card scheme for which the token was generated. */
export type CardScheme41 = CardScheme;

export const cardScheme41Schema: Schema<CardScheme41> = s.of<CardScheme41>(
  s.union([s.lazy(() => cardSchemeSchema)]),
);
