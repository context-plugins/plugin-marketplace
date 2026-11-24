import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type AdSetUpdate = {
  name?: string;
  status?: Status;
  dailyBudget?: string;
  lifetimeBudget?: string;
  targeting?: Record<string, unknown>;
  bidAmount?: number;
  endTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adSetUpdateSchema: Schema<AdSetUpdate> = s.object<AdSetUpdate>(
  {
    name: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusSchema)),
    dailyBudget: s.optional(s.string()),
    lifetimeBudget: s.optional(s.string()),
    targeting: s.optional(s.record(s.string(), s.unknown())),
    bidAmount: s.optional(s.int()),
    endTime: s.optional(s.dateTime()),
    _keysMap: {
      dailyBudget: "daily_budget",
      lifetimeBudget: "lifetime_budget",
      bidAmount: "bid_amount",
      endTime: "end_time",
    },
  },
  { additionalProperties: s.json() },
);
