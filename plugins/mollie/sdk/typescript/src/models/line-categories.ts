import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LineCategories = {
  Eco: "eco",
  Gift: "gift",
  Meal: "meal",
  SportCulture: "sport_culture",
  Additional: "additional",
  Consume: "consume",
} as const;
export type LineCategories = (typeof LineCategories)[keyof typeof LineCategories] | (string & {});

export const lineCategoriesSchema: EnumSchema<LineCategories> = s.enumOf<LineCategories>(LineCategories);
