import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { IdentityScope, identityScopeSchema } from "./identity-scope.js";
import { MaxAgeSeconds, maxAgeSecondsSchema } from "./max-age-seconds.js";
import { Status1, status1Schema } from "./status1.js";
import { ageSecondsSchema, type AgeSeconds } from "./unions/age-seconds.js";
import { asOfSchema, type AsOf } from "./unions/as-of.js";
import { clusterLookbackDaysSchema, type ClusterLookbackDays } from "./unions/cluster-lookback-days.js";
import { filingsLookbackDaysSchema, type FilingsLookbackDays } from "./unions/filings-lookback-days.js";
import { generatedAtSchema, type GeneratedAt } from "./unions/generated-at.js";
import { reason11Schema, type Reason11 } from "./unions/reason11.js";

/** Context availability and timing for the selected snapshot, without ticker data. */
export type RadarContextSummary = {
  /** @default Status1.Unavailable */
  status?: Status1;
  reason?: Reason11;
  asOf?: AsOf;
  generatedAt?: GeneratedAt;
  ageSeconds?: AgeSeconds;
  /** @default MaxAgeSeconds._300 */
  maxAgeSeconds?: MaxAgeSeconds;
  filingsLookbackDays?: FilingsLookbackDays;
  clusterLookbackDays?: ClusterLookbackDays;
  /** @default IdentityScope.IssuerCik */
  identityScope?: IdentityScope;
  /** @default false */
  pointInTime?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const radarContextSummarySchema: Schema<RadarContextSummary> = s.object<RadarContextSummary>(
  {
    status: s.defaulted(status1Schema, Status1.Unavailable),
    reason: s.optional(s.lazy(() => reason11Schema)),
    asOf: s.optional(s.lazy(() => asOfSchema)),
    generatedAt: s.optional(s.lazy(() => generatedAtSchema)),
    ageSeconds: s.optional(s.lazy(() => ageSecondsSchema)),
    maxAgeSeconds: s.defaulted(maxAgeSecondsSchema, MaxAgeSeconds._300),
    filingsLookbackDays: s.optional(s.lazy(() => filingsLookbackDaysSchema)),
    clusterLookbackDays: s.optional(s.lazy(() => clusterLookbackDaysSchema)),
    identityScope: s.defaulted(identityScopeSchema, IdentityScope.IssuerCik),
    pointInTime: s.defaulted(s.boolean(), false),
    _keysMap: {
      asOf: "as_of",
      generatedAt: "generated_at",
      ageSeconds: "age_seconds",
      maxAgeSeconds: "max_age_seconds",
      filingsLookbackDays: "filings_lookback_days",
      clusterLookbackDays: "cluster_lookback_days",
      identityScope: "identity_scope",
      pointInTime: "point_in_time",
    },
  },
  { additionalProperties: s.json() },
);
