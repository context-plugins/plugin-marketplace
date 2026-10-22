import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cardSchemeSchema, type CardScheme } from "../card-scheme.js";

/** The scheme/brand of the card that is used for 3-D Secure. */
export type Scheme3 = CardScheme;

export const scheme3Schema: Schema<Scheme3> = s.of<Scheme3>(s.union([s.lazy(() => cardSchemeSchema)]));
