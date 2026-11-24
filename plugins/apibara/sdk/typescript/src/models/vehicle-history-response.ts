import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cursorMetaInternalSchema, cursorMetaSchema, type CursorMeta } from "./cursor-meta.js";
import { vehicleInternalSchema, vehicleSchema, type Vehicle } from "./vehicle.js";

export type VehicleHistoryResponse = {
  data: Vehicle[];
  /** Cursor pagination metadata. */
  meta: CursorMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const vehicleHistoryResponseProperties: s.Shape<VehicleHistoryResponse> = {
  data: s.array(s.lazy(() => vehicleInternalSchema)),
  meta: cursorMetaInternalSchema,
};

export const vehicleHistoryResponseInternalSchema: Schema<VehicleHistoryResponse> =
  s.object<VehicleHistoryResponse>(vehicleHistoryResponseProperties, { additionalProperties: s.json() });

export const vehicleHistoryResponseSchema: Schema<VehicleHistoryResponse> = s.lazySchema(() =>
  s.object<VehicleHistoryResponse>(
    {
      ...vehicleHistoryResponseProperties,
      data: s.array(s.lazy(() => vehicleSchema)),
      meta: cursorMetaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
