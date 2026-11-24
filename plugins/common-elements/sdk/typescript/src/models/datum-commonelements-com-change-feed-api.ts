import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatumCommonelementsComChangeFeedApi = {
  /** Stable id for this change event. */
  id?: string;
  /** The association the change was observed on. */
  organizationId?: string;
  /** Association legal name. */
  organizationName?: string;
  /** Kebab-case slug for the public directory page. */
  directorySlug?: string | null;
  /** "hoa", "condo", or "coop". */
  subtype?: string | null;
  /** City on the association record. */
  city?: string | null;
  /** County on the association record. */
  county?: string | null;
  /** Two-letter state code. */
  state?: string | null;
  /** Units or lots in the community, where known. */
  unitCount?: number | null;
  /** One of the 13 kinds listed above. */
  changeKind?: string;
  /** Date the change was observed in the source record. */
  observedOn?: string;
  /** Relative size of the change, 0 to 1. */
  magnitude?: number | null;
  /**
   * Person-free summary of what changed. Null keys are stripped, so a given event carries only the
   * relevant subset of: seats_affected, titles_affected, board_size, previous_manager, new_manager,
   * previous_status, new_status, previous_name, new_name.
   */
  detail?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumCommonelementsComChangeFeedApiSchema: Schema<DatumCommonelementsComChangeFeedApi> =
  s.object<DatumCommonelementsComChangeFeedApi>(
    {
      id: s.optional(s.string()),
      organizationId: s.optional(s.string()),
      organizationName: s.optional(s.string()),
      directorySlug: s.optionalNullable(s.string()),
      subtype: s.optionalNullable(s.string()),
      city: s.optionalNullable(s.string()),
      county: s.optionalNullable(s.string()),
      state: s.optionalNullable(s.string()),
      unitCount: s.optionalNullable(s.float64()),
      changeKind: s.optional(s.string()),
      observedOn: s.optional(s.dateOnly()),
      magnitude: s.optionalNullable(s.float64()),
      detail: s.optional(s.record(s.string(), s.unknown())),
      _keysMap: {
        organizationId: "organization_id",
        organizationName: "organization_name",
        directorySlug: "directory_slug",
        unitCount: "unit_count",
        changeKind: "change_kind",
        observedOn: "observed_on",
      },
    },
    { additionalProperties: s.json() },
  );
