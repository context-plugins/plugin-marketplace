import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data3 = {
  /** Title as filed (e.g. "President", "Director"). */
  officerTitle?: string;
  /** Officer name as filed. */
  firstName?: string;
  /** Officer name as filed. */
  lastName?: string;
  /** Additional name parts, where present. */
  middleInitial?: string | null;
  /** Additional name parts, where present. */
  suffix?: string | null;
  /** Location on the filing, not necessarily the officer's residence. */
  city?: string | null;
  /** Location on the filing, not necessarily the officer's residence. */
  county?: string | null;
  /** Location on the filing, not necessarily the officer's residence. */
  state?: string | null;
  /** The state filing source this row came from. */
  directorySource?: string;
  /** Which ingested snapshot this row belongs to. */
  sourceSnapshotLabel?: string;
  /** Whether this filing row has been matched to a canonical person record. */
  isResolved?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data3Schema: Schema<Data3> = s.object<Data3>(
  {
    officerTitle: s.optional(s.string()),
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    middleInitial: s.optionalNullable(s.string()),
    suffix: s.optionalNullable(s.string()),
    city: s.optionalNullable(s.string()),
    county: s.optionalNullable(s.string()),
    state: s.optionalNullable(s.string()),
    directorySource: s.optional(s.string()),
    sourceSnapshotLabel: s.optional(s.string()),
    isResolved: s.optional(s.boolean()),
    _keysMap: {
      officerTitle: "officer_title",
      firstName: "first_name",
      lastName: "last_name",
      middleInitial: "middle_initial",
      directorySource: "directory_source",
      sourceSnapshotLabel: "source_snapshot_label",
      isResolved: "is_resolved",
    },
  },
  { additionalProperties: s.json() },
);
