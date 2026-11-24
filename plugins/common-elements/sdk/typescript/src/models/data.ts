import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data = {
  /** Structural Integrity Reserve Study filings: on_file, project_count, and the projects array. */
  sirs?: Record<string, unknown>;
  /**
   * County recertification roll: status and due of the record with the latest due date,
   * record_count, and every records row so you can apply your own rule.
   */
  milestone?: Record<string, unknown>;
  /**
   * count, delinquent, delinquent_count, earliest_expiry, max_landings, and the certificates array
   * from the FL DBPR elevator safety roll.
   */
  elevators?: Record<string, unknown>;
  /**
   * inspection_count, last_inspection_date, last_result, last_violations, and the inspections array
   * from FL DOH.
   */
  pools?: Record<string, unknown>;
  /**
   * max_stories, max_building_height_ft, earliest_year_built, three_plus_story_building (null when
   * no characteristics row exists, not false), and the buildings array.
   */
  structure?: Record<string, unknown>;
  /**
   * project_count, status, status_date, expiration_date, approval_method, and the projects array.
   */
  fha?: Record<string, unknown>;
  /**
   * Row count per layer: sirs, recertifications, elevators, pool_inspections, characteristics,
   * fha_projects.
   */
  layerCounts?: Record<string, unknown>;
  /** False when every layer is empty for this association. */
  hasData?: boolean;
  /** The public-record sources behind this response. */
  source?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSchema: Schema<Data> = s.object<Data>(
  {
    sirs: s.optional(s.record(s.string(), s.unknown())),
    milestone: s.optional(s.record(s.string(), s.unknown())),
    elevators: s.optional(s.record(s.string(), s.unknown())),
    pools: s.optional(s.record(s.string(), s.unknown())),
    structure: s.optional(s.record(s.string(), s.unknown())),
    fha: s.optional(s.record(s.string(), s.unknown())),
    layerCounts: s.optional(s.record(s.string(), s.unknown())),
    hasData: s.optional(s.boolean()),
    source: s.optional(s.string()),
    _keysMap: {
      layerCounts: "layer_counts",
      hasData: "has_data",
    },
  },
  { additionalProperties: s.json() },
);
