import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  awsDailyCoverageEntryInternalSchema,
  awsDailyCoverageEntrySchema,
  type AwsDailyCoverageEntry,
} from "./aws-daily-coverage-entry.js";

/** Trailing 30 days of commitment coverage, grouped by SP type. */
export type DailyCoverage = {
  compute?: AwsDailyCoverageEntry[];
  database?: AwsDailyCoverageEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const dailyCoverageProperties: s.Shape<DailyCoverage> = {
  compute: s.optional(s.array(s.lazy(() => awsDailyCoverageEntryInternalSchema))),
  database: s.optional(s.array(s.lazy(() => awsDailyCoverageEntryInternalSchema))),
};

export const dailyCoverageInternalSchema: Schema<DailyCoverage> = s.object<DailyCoverage>(
  dailyCoverageProperties,
  { additionalProperties: s.json() },
);

export const dailyCoverageSchema: Schema<DailyCoverage> = s.lazySchema(() =>
  s.object<DailyCoverage>(
    {
      ...dailyCoverageProperties,
      compute: s.optional(s.array(s.lazy(() => awsDailyCoverageEntrySchema))),
      database: s.optional(s.array(s.lazy(() => awsDailyCoverageEntrySchema))),
    },
    { additionalProperties: s.json() },
  ),
);
