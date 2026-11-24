import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data4CommonelementsComBulkDeliveryApi = {
  /** Schedule id. */
  id?: string;
  /** Dataset the schedule delivers. */
  dataset?: string;
  /** daily, weekly, or monthly. */
  cadence?: string;
  /** When the next run is due. */
  nextRunAt?: Date | null;
  /** When a file last landed. In `changes` mode this is the watermark the next run reads from. */
  lastSuccessAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data4CommonelementsComBulkDeliveryApiSchema: Schema<Data4CommonelementsComBulkDeliveryApi> =
  s.object<Data4CommonelementsComBulkDeliveryApi>(
    {
      id: s.optional(s.string()),
      dataset: s.optional(s.string()),
      cadence: s.optional(s.string()),
      nextRunAt: s.optionalNullable(s.dateTime()),
      lastSuccessAt: s.optionalNullable(s.dateTime()),
      _keysMap: {
        nextRunAt: "next_run_at",
        lastSuccessAt: "last_success_at",
      },
    },
    { additionalProperties: s.json() },
  );
