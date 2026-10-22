import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The city for the address. */
export type City = string;

export const citySchema: Schema<City> = s.of<City>(s.union([s.string()]));
