import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The date and time of travel in local time at the departure airport. */
export type DepartureAt = Date;

export const departureAtSchema: Schema<DepartureAt> = s.of<DepartureAt>(s.union([s.dateTime()]));
