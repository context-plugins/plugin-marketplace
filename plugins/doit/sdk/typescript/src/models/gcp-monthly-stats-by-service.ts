import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  gcpMonthlyStatsEntryInternalSchema,
  gcpMonthlyStatsEntrySchema,
  type GcpMonthlyStatsEntry,
} from "./gcp-monthly-stats-entry.js";
import { service4Schema, type Service4 } from "./service4.js";

/** Trailing 6 calendar months of billing account stats for one product line. */
export type GcpMonthlyStatsByService = {
  /** Product line these monthly stats belong to. */
  service: Service4;
  /** Monthly aggregates, sorted ascending by `month`. */
  months: GcpMonthlyStatsEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const gcpMonthlyStatsByServiceProperties: s.Shape<GcpMonthlyStatsByService> = {
  service: service4Schema,
  months: s.array(s.lazy(() => gcpMonthlyStatsEntryInternalSchema)),
};

export const gcpMonthlyStatsByServiceInternalSchema: Schema<GcpMonthlyStatsByService> =
  s.object<GcpMonthlyStatsByService>(gcpMonthlyStatsByServiceProperties, { additionalProperties: s.json() });

export const gcpMonthlyStatsByServiceSchema: Schema<GcpMonthlyStatsByService> = s.lazySchema(() =>
  s.object<GcpMonthlyStatsByService>(
    {
      ...gcpMonthlyStatsByServiceProperties,
      months: s.array(s.lazy(() => gcpMonthlyStatsEntrySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
