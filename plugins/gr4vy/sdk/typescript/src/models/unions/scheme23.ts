import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cardSchemeSchema, type CardScheme } from "../card-scheme.js";

/** The card scheme for this 3DS configuration */
export type Scheme23 = CardScheme;

export const scheme23Schema: Schema<Scheme23> = s.of<Scheme23>(s.union([s.lazy(() => cardSchemeSchema)]));
