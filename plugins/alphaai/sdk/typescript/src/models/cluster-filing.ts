import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ClusterFiling = {
  accessionNumber: string;
  filedAt: Date;
  /** The filing's EDGAR index page. */
  secUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const clusterFilingProperties: s.Shape<ClusterFiling> = {
  accessionNumber: s.string(),
  filedAt: s.dateTime(),
  secUrl: s.string(),
  _keysMap: {
    accessionNumber: "accession_number",
    filedAt: "filed_at",
    secUrl: "sec_url",
  },
};

export const clusterFilingInternalSchema: Schema<ClusterFiling> = s.object<ClusterFiling>(
  clusterFilingProperties,
  { additionalProperties: s.json() },
);

export const clusterFilingSchema: Schema<ClusterFiling> = s.lazySchema(() =>
  s.object<ClusterFiling>(
    {
      ...clusterFilingProperties,
      secUrl: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
