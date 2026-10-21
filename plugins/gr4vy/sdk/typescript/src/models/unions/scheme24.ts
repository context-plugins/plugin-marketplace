import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cardSchemeSchema, type CardScheme } from "../card-scheme.js";

/** The scheme of the card. Only applies to card payments. */
export type Scheme24 = CardScheme;

export const scheme24Schema: Schema<Scheme24> = s.of<Scheme24>(s.union([s.lazy(() => cardSchemeSchema)]));
