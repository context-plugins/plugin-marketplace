import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { licenseAllocationEntrySchema, type LicenseAllocationEntry } from "./license-allocation-entry.js";

/** Request payload for updating license allocation for a group */
export type UpdateGroupLicenseAllocationRequest = {
  userLicenses?: LicenseAllocationEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateGroupLicenseAllocationRequestSchema: Schema<UpdateGroupLicenseAllocationRequest> =
  s.object<UpdateGroupLicenseAllocationRequest>(
    {
      userLicenses: s.optional(s.array(s.lazy(() => licenseAllocationEntrySchema))),
    },
    { additionalProperties: s.json() },
  );
