import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cursorMetaInternalSchema, cursorMetaSchema, type CursorMeta } from "./cursor-meta.js";
import { vehicleInternalSchema, vehicleSchema, type Vehicle } from "./vehicle.js";

export type VehicleListResponse = {
  data: Vehicle[];
  /** Cursor pagination metadata. */
  meta: CursorMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const vehicleListResponseProperties: s.Shape<VehicleListResponse> = {
  data: s.array(s.lazy(() => vehicleInternalSchema)),
  meta: cursorMetaInternalSchema,
};

export const vehicleListResponseInternalSchema: Schema<VehicleListResponse> = s.object<VehicleListResponse>(
  vehicleListResponseProperties,
  { additionalProperties: s.json() },
);

export const vehicleListResponseSchema: Schema<VehicleListResponse> = s.lazySchema(() =>
  s.object<VehicleListResponse>(
    {
      ...vehicleListResponseProperties,
      data: s.array(s.lazy(() => vehicleSchema)),
      meta: cursorMetaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
