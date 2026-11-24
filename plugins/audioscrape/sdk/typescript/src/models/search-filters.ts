import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SearchFilters = {
  /**
   * Restrict to content types (`phone_call`, `meeting`, `interview`, `government_meeting`,
   * `podcast_episode`, ...) — the typed audio axis.
   */
  contentTypes?: string[] | null;
  /** Filter by publish date (ISO 8601 format: "2024-01-01" or "2024-01-01T00:00:00Z"). */
  dateFrom?: string | null;
  /** Filter by publish date (ISO 8601 format: "2024-12-31" or "2024-12-31T23:59:59Z"). */
  dateTo?: string | null;
  /** Restrict to specific podcast IDs. */
  podcastIds?: string[] | null;
  /** Restrict to specific speakers (exact match on speaker name). */
  speakers?: string[] | null;
  /**
   * Tenancy scope: `all` (default: the public corpus plus your own data) | `public` (the public
   * corpus only) | `workspace` (your own data only; with an API key, the key's workspace). It only
   * narrows what you may read, never widens it; any other value is a 400. `workspace` also relaxes
   * the short-segment floor and scopes semantic retrieval.
   */
  visibility?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchFiltersSchema: Schema<SearchFilters> = s.object<SearchFilters>(
  {
    contentTypes: s.optionalNullable(s.array(s.string())),
    dateFrom: s.optionalNullable(s.string()),
    dateTo: s.optionalNullable(s.string()),
    podcastIds: s.optionalNullable(s.array(s.string())),
    speakers: s.optionalNullable(s.array(s.string())),
    visibility: s.optionalNullable(s.string()),
    _keysMap: {
      contentTypes: "content_types",
      dateFrom: "date_from",
      dateTo: "date_to",
      podcastIds: "podcast_ids",
    },
  },
  { additionalProperties: s.json() },
);
