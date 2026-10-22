import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Indicates seat class (first class, business class, etc.). */
export type SeatClass = string;

export const seatClassSchema: Schema<SeatClass> = s.of<SeatClass>(s.union([s.string()]));
