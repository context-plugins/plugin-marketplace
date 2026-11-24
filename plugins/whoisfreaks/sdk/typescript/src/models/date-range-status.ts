import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DateRangeStatus = {
  availableFrom?: string;
  lastUpdate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dateRangeStatusSchema: Schema<DateRangeStatus> = s.object<DateRangeStatus>(
  {
    availableFrom: s.optional(s.string()),
    lastUpdate: s.optional(s.string()),
    _keysMap: {
      availableFrom: "available_from",
      lastUpdate: "last_update",
    },
  },
  { additionalProperties: s.json() },
);
