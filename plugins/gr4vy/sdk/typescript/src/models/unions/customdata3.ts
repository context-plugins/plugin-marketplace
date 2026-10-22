import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { travelHubCustomDataSchema, type TravelHubCustomData } from "../travel-hub-custom-data.js";

/** A list of `customData` to pass to the TravelHub API. */
export type Customdata3 = TravelHubCustomData[];

export const customdata3Schema: Schema<Customdata3> = s.of<Customdata3>(
  s.union([s.array(s.lazy(() => travelHubCustomDataSchema))]),
);
