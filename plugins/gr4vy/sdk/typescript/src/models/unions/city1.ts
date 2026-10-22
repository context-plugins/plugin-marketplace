import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The merchant's city to be displayed in a statement descriptor. */
export type City1 = string;

export const city1Schema: Schema<City1> = s.of<City1>(s.union([s.string()]));
