import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cardSchemeSchema, type CardScheme } from "../card-scheme.js";

/** The scheme of the card. */
export type Scheme211 = CardScheme;

export const scheme211Schema: Schema<Scheme211> = s.of<Scheme211>(s.union([s.lazy(() => cardSchemeSchema)]));
