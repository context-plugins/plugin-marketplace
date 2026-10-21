import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** GPU capacity type. */
export const CapacityType = {
  Reservation: "reservation",
} as const;
export type CapacityType = (typeof CapacityType)[keyof typeof CapacityType] | (string & {});

export const capacityTypeSchema: EnumSchema<CapacityType> = s.enumOf<CapacityType>(CapacityType);
