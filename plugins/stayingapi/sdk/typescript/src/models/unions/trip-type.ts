import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TripType = string;

export const tripTypeSchema: Schema<TripType> = s.of<TripType>(s.union([s.string()]));
