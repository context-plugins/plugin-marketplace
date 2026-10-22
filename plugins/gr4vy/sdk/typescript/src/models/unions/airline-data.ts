import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  nuveiAirlineDataOptionsSchema,
  type NuveiAirlineDataOptions,
} from "../nuvei-airline-data-options.js";

/** Provides additional airline data for Nuvei payments. */
export type AirlineData = NuveiAirlineDataOptions;

export const airlineDataSchema: Schema<AirlineData> = s.of<AirlineData>(
  s.union([s.lazy(() => nuveiAirlineDataOptionsSchema)]),
);
