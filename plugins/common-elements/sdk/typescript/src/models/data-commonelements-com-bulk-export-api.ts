import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DataCommonelementsComBulkExportApi = {
  /** Stable id for this change event. */
  id?: string;
  /** Date the change was observed in the source record. */
  observedOn?: string;
  /** The association the change was observed on. */
  organizationId?: string;
  /** The association the change was observed on. */
  organizationName?: string;
  /** Location and type of the association. */
  state?: string | null;
  /** Location and type of the association. */
  county?: string | null;
  /** Location and type of the association. */
  subtype?: string | null;
  /** One of the 13 change kinds. */
  eventType?: string;
  /**
   * The part of the record that moved: board_roster, management_company, entity_status,
   * entity_name, or license.
   */
  field?: string;
  /**
   * Person-free before/after summaries: firm names for management changes, statuses for
   * registration changes, seat counts and canonical titles for board changes. Never an individual's
   * name.
   */
  oldValue?: string | null;
  /**
   * Person-free before/after summaries: firm names for management changes, statuses for
   * registration changes, seat counts and canonical titles for board changes. Never an individual's
   * name.
   */
  newValue?: string | null;
  /** Relative size of the change, 0 to 1. */
  magnitude?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataCommonelementsComBulkExportApiSchema: Schema<DataCommonelementsComBulkExportApi> =
  s.object<DataCommonelementsComBulkExportApi>(
    {
      id: s.optional(s.string()),
      observedOn: s.optional(s.dateOnly()),
      organizationId: s.optional(s.string()),
      organizationName: s.optional(s.string()),
      state: s.optionalNullable(s.string()),
      county: s.optionalNullable(s.string()),
      subtype: s.optionalNullable(s.string()),
      eventType: s.optional(s.string()),
      field: s.optional(s.string()),
      oldValue: s.optionalNullable(s.string()),
      newValue: s.optionalNullable(s.string()),
      magnitude: s.optionalNullable(s.float64()),
      _keysMap: {
        observedOn: "observed_on",
        organizationId: "organization_id",
        organizationName: "organization_name",
        eventType: "event_type",
        oldValue: "old_value",
        newValue: "new_value",
      },
    },
    { additionalProperties: s.json() },
  );
