import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RadarClusterFiling = {
  accessionNumber: string;
  filedAt: Date;
  secUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const radarClusterFilingSchema: Schema<RadarClusterFiling> = s.object<RadarClusterFiling>(
  {
    accessionNumber: s.string(),
    filedAt: s.dateTime(),
    secUrl: s.string(),
    _keysMap: {
      accessionNumber: "accession_number",
      filedAt: "filed_at",
      secUrl: "sec_url",
    },
  },
  { additionalProperties: s.json() },
);
