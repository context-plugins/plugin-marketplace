import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Category = {
  CategoryUnspecified: "CATEGORY_UNSPECIFIED",
  Cover: "COVER",
  Profile: "PROFILE",
  Logo: "LOGO",
  Exterior: "EXTERIOR",
  Interior: "INTERIOR",
  Product: "PRODUCT",
  AtWork: "AT_WORK",
  FoodAndDrink: "FOOD_AND_DRINK",
  Menu: "MENU",
  CommonArea: "COMMON_AREA",
  Rooms: "ROOMS",
  Teams: "TEAMS",
  Additional: "ADDITIONAL",
} as const;
export type Category = (typeof Category)[keyof typeof Category] | (string & {});

export const categorySchema: EnumSchema<Category> = s.enumOf<Category>(Category);
