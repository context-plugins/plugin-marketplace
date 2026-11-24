import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HistoryResponse = {
  success?: boolean;
  vin?: string;
  junkAndSalvageInformation?: Record<string, unknown>[];
  insuranceInformation?: Record<string, unknown>[];
  brandsRecordCount?: number;
  brandsInformation?: Record<string, unknown>[];
  vinChanged?: boolean;
  currentTitleInformation?: Record<string, unknown>[];
  historyInformation?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historyResponseSchema: Schema<HistoryResponse> = s.object<HistoryResponse>(
  {
    success: s.optional(s.boolean()),
    vin: s.optional(s.string()),
    junkAndSalvageInformation: s.optional(s.array(s.record(s.string(), s.unknown()))),
    insuranceInformation: s.optional(s.array(s.record(s.string(), s.unknown()))),
    brandsRecordCount: s.optional(s.float64()),
    brandsInformation: s.optional(s.array(s.record(s.string(), s.unknown()))),
    vinChanged: s.optional(s.boolean()),
    currentTitleInformation: s.optional(s.array(s.record(s.string(), s.unknown()))),
    historyInformation: s.optional(s.array(s.record(s.string(), s.unknown()))),
  },
  { additionalProperties: s.json() },
);
