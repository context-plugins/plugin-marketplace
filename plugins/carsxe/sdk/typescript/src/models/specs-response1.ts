import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { colorSchema, type Color } from "./color.js";
import { warrantySchema, type Warranty } from "./warranty.js";

/** Full vehicle specifications (only present when `decodeVIN=true`). */
export type SpecsResponse1 = {
  success?: boolean;
  /** Echo of the input parameters specified by the query. */
  input?: Record<string, unknown>;
  timestamp?: string;
  /**
   * A map of specifications about the VIN (year, make, model, trim, style, type, size, category,
   * made_in, doors, fuel_type, engine, transmission, drivetrain, dimensions, pricing and more).
   */
  attributes?: Record<string, unknown>;
  /** Available color options based on the vehicle's year, make and model. */
  colors?: Color[];
  /** Equipment details based on the vehicle's year, make and model. */
  equipment?: Record<string, unknown>;
  /** Standard vehicle warranties by type, miles and months. */
  warranties?: Warranty[];
  /** More information on the vehicle from the deep data search (present when `deepdata=1`). */
  deepdata?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const specsResponse1Schema: Schema<SpecsResponse1> = s.object<SpecsResponse1>(
  {
    success: s.optional(s.boolean()),
    input: s.optional(s.record(s.string(), s.unknown())),
    timestamp: s.optional(s.string()),
    attributes: s.optional(s.record(s.string(), s.unknown())),
    colors: s.optional(s.array(s.lazy(() => colorSchema))),
    equipment: s.optional(s.record(s.string(), s.unknown())),
    warranties: s.optional(s.array(s.lazy(() => warrantySchema))),
    deepdata: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
