import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlaceActionType = {
  Appointment: "APPOINTMENT",
  OnlineAppointment: "ONLINE_APPOINTMENT",
  DiningReservation: "DINING_RESERVATION",
  FoodOrdering: "FOOD_ORDERING",
  FoodDelivery: "FOOD_DELIVERY",
  FoodTakeout: "FOOD_TAKEOUT",
  ShopOnline: "SHOP_ONLINE",
} as const;
export type PlaceActionType = (typeof PlaceActionType)[keyof typeof PlaceActionType] | (string & {});

export const placeActionTypeSchema: EnumSchema<PlaceActionType> = s.enumOf<PlaceActionType>(PlaceActionType);
