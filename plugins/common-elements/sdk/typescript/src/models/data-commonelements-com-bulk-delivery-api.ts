import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DataCommonelementsComBulkDeliveryApi = {
  /** Delivery id. Poll /v1/deliveries/{id} with it. */
  id?: string;
  /** Lifecycle state: queued, running, succeeded, failed, or cancelled. */
  status?: string;
  /** Row ceiling applied to this run, from your plan. */
  rowCap?: number;
  /** Lookback window applied in `changes` mode, from your plan. */
  maxLookbackDays?: number | null;
  /** When the delivery was accepted. */
  requestedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataCommonelementsComBulkDeliveryApiSchema: Schema<DataCommonelementsComBulkDeliveryApi> =
  s.object<DataCommonelementsComBulkDeliveryApi>(
    {
      id: s.optional(s.string()),
      status: s.optional(s.string()),
      rowCap: s.optional(s.float64()),
      maxLookbackDays: s.optionalNullable(s.float64()),
      requestedAt: s.optional(s.dateTime()),
      _keysMap: {
        rowCap: "row_cap",
        maxLookbackDays: "max_lookback_days",
        requestedAt: "requested_at",
      },
    },
    { additionalProperties: s.json() },
  );
