import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** minimum GitHub stars */
export type MinStars = number;

export const minStarsSchema: Schema<MinStars> = s.of<MinStars>(s.union([s.int()]));
