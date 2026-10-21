import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cardSchemeSchema, type CardScheme } from "../card-scheme.js";

/** The card scheme/network. */
export type Scheme21 = CardScheme;

export const scheme21Schema: Schema<Scheme21> = s.of<Scheme21>(s.union([s.lazy(() => cardSchemeSchema)]));
