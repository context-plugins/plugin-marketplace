import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type RecipCity = string;

export const recipCitySchema: Schema<RecipCity> = s.of<RecipCity>(s.union([s.string()]));
