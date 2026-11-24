import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SlotTypeStatistics = {
  /** The number of recommended slot types associated with the bot recommendation. */
  discoveredSlotTypeCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotTypeStatisticsSchema: Schema<SlotTypeStatistics> = s.object<SlotTypeStatistics>(
  {
    discoveredSlotTypeCount: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
