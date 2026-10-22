import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The date and time of travel in local time at the arrival airport. */
export type ArrivalAt = Date;

export const arrivalAtSchema: Schema<ArrivalAt> = s.of<ArrivalAt>(s.union([s.dateTime()]));
