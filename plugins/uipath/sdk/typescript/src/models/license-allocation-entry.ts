import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A single license type allocation for a group */
export type LicenseAllocationEntry = {
  /** License product code identifier */
  code?: string;
  /** Total number of licenses allocated to the group */
  totalCount?: number;
  /** Number of licenses currently consumed by group members */
  usedCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const licenseAllocationEntrySchema: Schema<LicenseAllocationEntry> = s.object<LicenseAllocationEntry>(
  {
    code: s.optional(s.string()),
    totalCount: s.optional(s.int()),
    usedCount: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
