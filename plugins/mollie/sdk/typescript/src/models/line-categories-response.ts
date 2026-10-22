import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LineCategoriesResponse = {
  Eco: "eco",
  Gift: "gift",
  Meal: "meal",
  SportCulture: "sport_culture",
  Additional: "additional",
  Consume: "consume",
} as const;
export type LineCategoriesResponse =
  | (typeof LineCategoriesResponse)[keyof typeof LineCategoriesResponse]
  | (string & {});

export const lineCategoriesResponseSchema: EnumSchema<LineCategoriesResponse> =
  s.enumOf<LineCategoriesResponse>(LineCategoriesResponse);
