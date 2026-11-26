import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { radarClusterContextSchema, type RadarClusterContext } from "./radar-cluster-context.js";
import { radarFilingContextSchema, type RadarFilingContext } from "./radar-filing-context.js";
import { status2Schema, type Status2 } from "./status2.js";
import { cikSchema, type Cik } from "./unions/cik.js";
import { clusterBuysCountSchema, type ClusterBuysCount } from "./unions/cluster-buys-count.js";
import { filingsCountSchema, type FilingsCount } from "./unions/filings-count.js";
import { reason111Schema, type Reason111 } from "./unions/reason111.js";

export type RadarTickerContext = {
  ticker: string;
  cik: Cik;
  status: Status2;
  reason?: Reason111;
  filingsCount?: FilingsCount;
  filings?: RadarFilingContext[];
  clusterBuysCount?: ClusterBuysCount;
  clusterBuys?: RadarClusterContext[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const radarTickerContextSchema: Schema<RadarTickerContext> = s.object<RadarTickerContext>(
  {
    ticker: s.string(),
    cik: cikSchema,
    status: status2Schema,
    reason: s.optional(s.lazy(() => reason111Schema)),
    filingsCount: s.optional(s.lazy(() => filingsCountSchema)),
    filings: s.optional(s.array(s.lazy(() => radarFilingContextSchema))),
    clusterBuysCount: s.optional(s.lazy(() => clusterBuysCountSchema)),
    clusterBuys: s.optional(s.array(s.lazy(() => radarClusterContextSchema))),
    _keysMap: {
      filingsCount: "filings_count",
      clusterBuysCount: "cluster_buys_count",
      clusterBuys: "cluster_buys",
    },
  },
  { additionalProperties: s.json() },
);
