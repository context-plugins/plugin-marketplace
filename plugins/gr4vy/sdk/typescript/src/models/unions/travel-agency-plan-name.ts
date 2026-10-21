import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The name of the travel agency plan. */
export type TravelAgencyPlanName = string;

export const travelAgencyPlanNameSchema: Schema<TravelAgencyPlanName> = s.of<TravelAgencyPlanName>(
  s.union([s.string()]),
);
