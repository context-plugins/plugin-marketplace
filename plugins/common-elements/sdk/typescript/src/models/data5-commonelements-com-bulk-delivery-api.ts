import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data5CommonelementsComBulkDeliveryApi = {
  /** Schedule id. */
  id?: string;
  /** daily, weekly, or monthly. */
  cadence?: string;
  /** When the next run is due. Null while paused. */
  nextRunAt?: Date | null;
  /** The schedule's recent runs, each in the same shape as a one-off delivery. */
  runs?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data5CommonelementsComBulkDeliveryApiSchema: Schema<Data5CommonelementsComBulkDeliveryApi> =
  s.object<Data5CommonelementsComBulkDeliveryApi>(
    {
      id: s.optional(s.string()),
      cadence: s.optional(s.string()),
      nextRunAt: s.optionalNullable(s.dateTime()),
      runs: s.optional(s.array(s.record(s.string(), s.unknown()))),
      _keysMap: {
        nextRunAt: "next_run_at",
      },
    },
    { additionalProperties: s.json() },
  );
