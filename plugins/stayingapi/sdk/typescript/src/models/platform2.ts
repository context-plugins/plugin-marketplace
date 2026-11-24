import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** DIRECT MODE ONLY. The platform this leg was priced on. */
export const Platform2 = {
  Airbnb: "airbnb",
  Booking: "booking",
  Vrbo: "vrbo",
  Expedia: "expedia",
  Hotels: "hotels",
  Google: "google",
  Tripadvisor: "tripadvisor",
} as const;
export type Platform2 = (typeof Platform2)[keyof typeof Platform2] | (string & {});

export const platform2Schema: EnumSchema<Platform2> = s.enumOf<Platform2>(Platform2);
