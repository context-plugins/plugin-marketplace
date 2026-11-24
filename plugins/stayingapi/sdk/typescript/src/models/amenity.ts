import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Amenity = {
  Pool: "pool",
  HotTub: "hot_tub",
  Kitchen: "kitchen",
  Wifi: "wifi",
  AirConditioning: "air_conditioning",
  Heating: "heating",
  ParkingFree: "parking_free",
  ParkingPaid: "parking_paid",
  PetFriendly: "pet_friendly",
  Washer: "washer",
  Dryer: "dryer",
  EvCharger: "ev_charger",
  Gym: "gym",
  SeaView: "sea_view",
  Beachfront: "beachfront",
  Balcony: "balcony",
  Bbq: "bbq",
  Workspace: "workspace",
  Crib: "crib",
  Elevator: "elevator",
  WheelchairAccessible: "wheelchair_accessible",
  SmokeAlarm: "smoke_alarm",
  Breakfast: "breakfast",
  Spa: "spa",
  Garden: "garden",
  Fireplace: "fireplace",
  Dishwasher: "dishwasher",
  SelfCheckIn: "self_check_in",
  NonSmoking: "non_smoking",
  FamilyFriendly: "family_friendly",
} as const;
export type Amenity = (typeof Amenity)[keyof typeof Amenity] | (string & {});

export const amenitySchema: EnumSchema<Amenity> = s.enumOf<Amenity>(Amenity);
