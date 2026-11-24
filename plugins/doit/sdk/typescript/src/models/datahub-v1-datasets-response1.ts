import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatahubV1DatasetsResponse1 = {
  /** The name of the dataset. */
  name?: string;
  /** The description of the dataset. */
  description?: string;
  /** The number of records in the dataset. */
  records?: number | null;
  /** The email of the user who last updated the dataset. */
  updatedBy?: string;
  /** The timestamp of the last update. */
  lastUpdated?: string;
  /**
   * Human-readable name shown in the DoiT console and in report results instead of `name`. Absent
   * when the dataset is displayed by its `name`. Does not affect ingest, which always uses `name`
   * as the provider.
   */
  displayName?: string;
  /**
   * The preset logo shown next to the dataset in the DoiT console. Absent when the dataset has no
   * preset logo.
   */
  logoName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datahubV1DatasetsResponse1Schema: Schema<DatahubV1DatasetsResponse1> =
  s.object<DatahubV1DatasetsResponse1>(
    {
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      records: s.optionalNullable(s.int()),
      updatedBy: s.optional(s.string()),
      lastUpdated: s.optional(s.string()),
      displayName: s.optional(s.string()),
      logoName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
