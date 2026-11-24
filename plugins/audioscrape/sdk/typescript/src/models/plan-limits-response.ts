import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlanLimitsResponse = {
  /**
   * Monthly data-API call limit (podcasts, episodes, persons, entities, charts, trending). `null`
   * means unlimited; `0` means disabled.
   */
  dataCallsPerMonth?: number | null;
  /** Maximum number of keyword alerts a user can create. `null` = unlimited. */
  keywordAlerts?: number | null;
  maxApiKeys: number;
  /** Monthly text-search limit. `null` means unlimited. */
  searchesPerMonth?: number | null;
  /**
   * Monthly semantic / hybrid search limit. `null` means unlimited; `0` means the feature is
   * disabled on this plan.
   */
  semanticSearchesPerMonth?: number | null;
  /** Storage limit for private uploads, in megabytes. `null` = unlimited. */
  storageMb?: number | null;
  /**
   * Monthly transcription quota for private uploads (in audio minutes). `null` = unlimited; `0` =
   * uploads disabled.
   */
  transcriptionMinutesPerMonth?: number | null;
  /** Whether webhook delivery is enabled for keyword alerts on this plan. */
  webhooksEnabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planLimitsResponseSchema: Schema<PlanLimitsResponse> = s.object<PlanLimitsResponse>(
  {
    dataCallsPerMonth: s.optionalNullable(s.int()),
    keywordAlerts: s.optionalNullable(s.int()),
    maxApiKeys: s.int(),
    searchesPerMonth: s.optionalNullable(s.int()),
    semanticSearchesPerMonth: s.optionalNullable(s.int()),
    storageMb: s.optionalNullable(s.int()),
    transcriptionMinutesPerMonth: s.optionalNullable(s.int()),
    webhooksEnabled: s.boolean(),
    _keysMap: {
      dataCallsPerMonth: "data_calls_per_month",
      keywordAlerts: "keyword_alerts",
      maxApiKeys: "max_api_keys",
      searchesPerMonth: "searches_per_month",
      semanticSearchesPerMonth: "semantic_searches_per_month",
      storageMb: "storage_mb",
      transcriptionMinutesPerMonth: "transcription_minutes_per_month",
      webhooksEnabled: "webhooks_enabled",
    },
  },
  { additionalProperties: s.json() },
);
