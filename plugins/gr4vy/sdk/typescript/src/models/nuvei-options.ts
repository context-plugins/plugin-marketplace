import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { airlineDataSchema, type AirlineData } from "./unions/airline-data.js";
import { customdataSchema, type Customdata } from "./unions/customdata.js";

export type NuveiOptions = {
  /** General data about the customer provided by the merchant. */
  customData?: Customdata;
  /** Provides additional airline data for Nuvei payments. */
  airlineData?: AirlineData;
};

export const nuveiOptionsSchema: Schema<NuveiOptions> = s.object<NuveiOptions>({
  customData: s.optional(s.lazy(() => customdataSchema)),
  airlineData: s.optional(s.lazy(() => airlineDataSchema)),
});
