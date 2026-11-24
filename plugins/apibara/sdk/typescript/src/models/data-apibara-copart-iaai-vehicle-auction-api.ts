import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DataApibaraCopartIaaiVehicleAuctionApi = {
  platform?: string;
  lotNumber?: string;
  vin?: string | null;
  sellerReserve?: Record<string, unknown>;
  events?: Record<string, unknown>[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataApibaraCopartIaaiVehicleAuctionApiSchema: Schema<DataApibaraCopartIaaiVehicleAuctionApi> =
  s.object<DataApibaraCopartIaaiVehicleAuctionApi>(
    {
      platform: s.optional(s.string()),
      lotNumber: s.optional(s.string()),
      vin: s.optionalNullable(s.string()),
      sellerReserve: s.optional(s.record(s.string(), s.unknown())),
      events: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
      _keysMap: {
        lotNumber: "lot_number",
        sellerReserve: "seller_reserve",
      },
    },
    { additionalProperties: s.json() },
  );
