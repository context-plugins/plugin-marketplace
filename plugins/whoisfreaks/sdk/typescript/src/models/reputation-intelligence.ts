import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { relatedIocSchema, type RelatedIoc } from "./related-ioc.js";

export type ReputationIntelligence = {
  iocType?: string;
  iocValue?: string;
  relatedIocs?: RelatedIoc[];
  feedTags?: string[];
  stixPattern?: string;
  recommendedAction?: string;
  firstSeen?: string;
  lastSeen?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reputationIntelligenceSchema: Schema<ReputationIntelligence> = s.object<ReputationIntelligence>(
  {
    iocType: s.optional(s.string()),
    iocValue: s.optional(s.string()),
    relatedIocs: s.optional(s.array(s.lazy(() => relatedIocSchema))),
    feedTags: s.optional(s.array(s.string())),
    stixPattern: s.optional(s.string()),
    recommendedAction: s.optional(s.string()),
    firstSeen: s.optional(s.string()),
    lastSeen: s.optional(s.string()),
    _keysMap: {
      iocType: "ioc_type",
      iocValue: "ioc_value",
      relatedIocs: "related_iocs",
      feedTags: "feed_tags",
      stixPattern: "stix_pattern",
      recommendedAction: "recommended_action",
      firstSeen: "first_seen",
      lastSeen: "last_seen",
    },
  },
  { additionalProperties: s.json() },
);
