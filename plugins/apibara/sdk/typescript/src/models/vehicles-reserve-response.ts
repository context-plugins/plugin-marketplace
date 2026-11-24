import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataApibaraCopartIaaiVehicleAuctionApiSchema,
  type DataApibaraCopartIaaiVehicleAuctionApi,
} from "./data-apibara-copart-iaai-vehicle-auction-api.js";

export type VehiclesReserveResponse = {
  ok?: boolean;
  data?: DataApibaraCopartIaaiVehicleAuctionApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vehiclesReserveResponseSchema: Schema<VehiclesReserveResponse> =
  s.object<VehiclesReserveResponse>(
    {
      ok: s.optional(s.boolean()),
      data: s.optional(s.lazy(() => dataApibaraCopartIaaiVehicleAuctionApiSchema)),
    },
    { additionalProperties: s.json() },
  );
