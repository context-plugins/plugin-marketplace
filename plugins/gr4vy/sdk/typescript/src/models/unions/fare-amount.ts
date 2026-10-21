import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Amount of the ticket, for current leg of the trip, excluding taxes and fees. */
export type FareAmount = number;

export const fareAmountSchema: Schema<FareAmount> = s.of<FareAmount>(s.union([s.int()]));
