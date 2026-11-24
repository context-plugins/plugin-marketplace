import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** longitude, longitude (alternative to city) */
export type Lon = number;

export const lonSchema: Schema<Lon> = s.of<Lon>(s.union([s.float64()]));
