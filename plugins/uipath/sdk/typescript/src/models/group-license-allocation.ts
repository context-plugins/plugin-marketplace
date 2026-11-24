import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { licenseAllocationEntrySchema, type LicenseAllocationEntry } from "./license-allocation-entry.js";

/** License allocation rule for a user group */
export type GroupLicenseAllocation = {
  /** Unique identifier of the group this allocation applies to */
  groupId?: string;
  userLicenses?: LicenseAllocationEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupLicenseAllocationSchema: Schema<GroupLicenseAllocation> = s.object<GroupLicenseAllocation>(
  {
    groupId: s.optional(s.string()),
    userLicenses: s.optional(s.array(s.lazy(() => licenseAllocationEntrySchema))),
  },
  { additionalProperties: s.json() },
);
