import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformSchema, type Platform } from "./platform.js";
import { lotNumberSchema, type LotNumber } from "./unions/lot-number.js";

export type IncludedVehicleHistoryItem = {
  platform?: Platform;
  lotNumber?: LotNumber | null;
  date?: string | null;
  price?: number | null;
  status?: string | null;
};

export const includedVehicleHistoryItemSchema: Schema<IncludedVehicleHistoryItem> =
  s.object<IncludedVehicleHistoryItem>({
    platform: s.optional(s.lazy(() => platformSchema)),
    lotNumber: s.optionalNullable(s.lazy(() => lotNumberSchema)),
    date: s.optionalNullable(s.dateOnly()),
    price: s.optionalNullable(s.float64()),
    status: s.optionalNullable(s.string()),
    _keysMap: {
      lotNumber: "lot_number",
    },
  });
