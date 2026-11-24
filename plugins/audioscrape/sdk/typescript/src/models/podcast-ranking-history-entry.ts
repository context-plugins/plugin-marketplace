import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PodcastRankingHistoryEntry = {
  countryCode: string;
  dateChecked: string;
  platform?: string | null;
  rank?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const podcastRankingHistoryEntrySchema: Schema<PodcastRankingHistoryEntry> =
  s.object<PodcastRankingHistoryEntry>(
    {
      countryCode: s.string(),
      dateChecked: s.string(),
      platform: s.optionalNullable(s.string()),
      rank: s.optionalNullable(s.int()),
      _keysMap: {
        countryCode: "country_code",
        dateChecked: "date_checked",
      },
    },
    { additionalProperties: s.json() },
  );
