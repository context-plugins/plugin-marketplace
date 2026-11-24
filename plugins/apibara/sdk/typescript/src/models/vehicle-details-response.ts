import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { vehicleInternalSchema, vehicleSchema, type Vehicle } from "./vehicle.js";

export type VehicleDetailsResponse = {
  /** Normalized Copart or IAAI auction vehicle record. */
  data?: Vehicle;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const vehicleDetailsResponseProperties: s.Shape<VehicleDetailsResponse> = {
  data: s.optional(s.lazy(() => vehicleInternalSchema)),
};

export const vehicleDetailsResponseInternalSchema: Schema<VehicleDetailsResponse> =
  s.object<VehicleDetailsResponse>(vehicleDetailsResponseProperties, { additionalProperties: s.json() });

export const vehicleDetailsResponseSchema: Schema<VehicleDetailsResponse> = s.lazySchema(() =>
  s.object<VehicleDetailsResponse>(
    {
      ...vehicleDetailsResponseProperties,
      data: s.optional(s.lazy(() => vehicleSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
