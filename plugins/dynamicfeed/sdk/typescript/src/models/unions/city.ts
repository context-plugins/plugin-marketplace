import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** city name, city name, e.g. London, Tokyo, New York */
export type City = string;

export const citySchema: Schema<City> = s.of<City>(s.union([s.string()]));
