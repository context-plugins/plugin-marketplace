import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cardSchemeSchema, type CardScheme } from "../card-scheme.js";

/** The optional card's network scheme. */
export type CardScheme411 = CardScheme;

export const cardScheme411Schema: Schema<CardScheme411> = s.of<CardScheme411>(
  s.union([s.lazy(() => cardSchemeSchema)]),
);
