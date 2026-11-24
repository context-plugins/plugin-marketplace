import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data3CommonelementsComBulkDeliveryApi = {
  /** Schedule id. */
  id?: string;
  /** How often it runs. */
  cadence?: string;
  /** When the next run is due. */
  nextRunAt?: Date | null;
  /** Set while the schedule is paused. */
  pausedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data3CommonelementsComBulkDeliveryApiSchema: Schema<Data3CommonelementsComBulkDeliveryApi> =
  s.object<Data3CommonelementsComBulkDeliveryApi>(
    {
      id: s.optional(s.string()),
      cadence: s.optional(s.string()),
      nextRunAt: s.optionalNullable(s.dateTime()),
      pausedAt: s.optionalNullable(s.dateTime()),
      _keysMap: {
        nextRunAt: "next_run_at",
        pausedAt: "paused_at",
      },
    },
    { additionalProperties: s.json() },
  );
