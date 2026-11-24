import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Seat = {
  True: "true",
  False: "false",
} as const;
export type Seat = (typeof Seat)[keyof typeof Seat] | (string & {});

export const seatSchema: EnumSchema<Seat> = s.enumOf<Seat>(Seat);
