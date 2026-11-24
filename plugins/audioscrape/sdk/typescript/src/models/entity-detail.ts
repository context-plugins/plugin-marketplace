import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entityEpisodeMentionSchema, type EntityEpisodeMention } from "./entity-episode-mention.js";

export type EntityDetail = {
  description?: string | null;
  entityType: string;
  id: number;
  mentionCount: number;
  name: string;
  /**
   * Top episodes mentioning this entity. Only populated by `GET /api/entities/{slug}` — search
   * results (`GET /api/entities`) always return an empty list and the field is omitted from the
   * JSON to keep responses compact.
   */
  recentEpisodes?: EntityEpisodeMention[];
  slug: string;
  /**
   * Wikidata QID for head entities (GH#161 linking) — the stable external join key. Omitted when
   * unlinked (the long tail).
   */
  wikidataQid?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityDetailSchema: Schema<EntityDetail> = s.object<EntityDetail>(
  {
    description: s.optionalNullable(s.string()),
    entityType: s.string(),
    id: s.int(),
    mentionCount: s.int(),
    name: s.string(),
    recentEpisodes: s.optional(s.array(s.lazy(() => entityEpisodeMentionSchema))),
    slug: s.string(),
    wikidataQid: s.optionalNullable(s.string()),
    _keysMap: {
      entityType: "entity_type",
      mentionCount: "mention_count",
      recentEpisodes: "recent_episodes",
      wikidataQid: "wikidata_qid",
    },
  },
  { additionalProperties: s.json() },
);
