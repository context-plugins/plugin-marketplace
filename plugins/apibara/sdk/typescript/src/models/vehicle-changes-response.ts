import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { meta1Schema, type Meta1 } from "./meta1.js";
import {
  vehicleChangeEventInternalSchema,
  vehicleChangeEventSchema,
  type VehicleChangeEvent,
} from "./vehicle-change-event.js";

export type VehicleChangesResponse = {
  /** @default "True" */
  ok?: "True";
  data: VehicleChangeEvent[];
  meta: Meta1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const vehicleChangesResponseProperties: s.Shape<VehicleChangesResponse> = {
  ok: s.defaulted(s.literal("True"), "True"),
  data: s.array(s.lazy(() => vehicleChangeEventInternalSchema)),
  meta: meta1Schema,
};

export const vehicleChangesResponseInternalSchema: Schema<VehicleChangesResponse> =
  s.object<VehicleChangesResponse>(vehicleChangesResponseProperties, { additionalProperties: s.json() });

export const vehicleChangesResponseSchema: Schema<VehicleChangesResponse> = s.lazySchema(() =>
  s.object<VehicleChangesResponse>(
    {
      ...vehicleChangesResponseProperties,
      data: s.array(s.lazy(() => vehicleChangeEventSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
