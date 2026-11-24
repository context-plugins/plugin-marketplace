import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  gcpDailyCoverageEntryInternalSchema,
  gcpDailyCoverageEntrySchema,
  type GcpDailyCoverageEntry,
} from "./gcp-daily-coverage-entry.js";
import { service7Schema, type Service7 } from "./service7.js";

/**
 * Trailing 30 days of CUD coverage for one product line. `compute` entries carry every cost
 * property except `cloudSql`; `cloud_sql` entries carry only `cloudSql` and `onDemand`, so each
 * coverage sub-type appears exactly once across the array.
 */
export type GcpDailyCoverageByService = {
  /** Product line this coverage series belongs to. */
  service: Service7;
  /** Daily coverage rows, sorted ascending by `date`. */
  days: GcpDailyCoverageEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const gcpDailyCoverageByServiceProperties: s.Shape<GcpDailyCoverageByService> = {
  service: service7Schema,
  days: s.array(s.lazy(() => gcpDailyCoverageEntryInternalSchema)),
};

export const gcpDailyCoverageByServiceInternalSchema: Schema<GcpDailyCoverageByService> =
  s.object<GcpDailyCoverageByService>(gcpDailyCoverageByServiceProperties, {
    additionalProperties: s.json(),
  });

export const gcpDailyCoverageByServiceSchema: Schema<GcpDailyCoverageByService> = s.lazySchema(() =>
  s.object<GcpDailyCoverageByService>(
    {
      ...gcpDailyCoverageByServiceProperties,
      days: s.array(s.lazy(() => gcpDailyCoverageEntrySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
