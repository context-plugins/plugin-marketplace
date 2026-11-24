import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EntityRef = {
  entityType: string;
  mentionCount: number;
  name: string;
  slug: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entityRefSchema: Schema<EntityRef> = s.object<EntityRef>(
  {
    entityType: s.string(),
    mentionCount: s.int(),
    name: s.string(),
    slug: s.string(),
    _keysMap: {
      entityType: "entity_type",
      mentionCount: "mention_count",
    },
  },
  { additionalProperties: s.json() },
);
