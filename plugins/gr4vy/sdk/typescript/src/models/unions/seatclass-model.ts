import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The seat class of the booking */
export type SeatclassModel = string;

export const seatclassModelSchema: Schema<SeatclassModel> = s.of<SeatclassModel>(s.union([s.string()]));
