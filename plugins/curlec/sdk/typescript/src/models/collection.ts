import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entitySchema, type Entity } from "./entity.js";

export type Collection = {
  entity?: Entity;
  /** Number of items in the current page. */
  count?: number;
  items?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const collectionSchema: Schema<Collection> = s.object<Collection>(
  {
    entity: s.optional(s.lazy(() => entitySchema)),
    count: s.optional(s.int()),
    items: s.optional(s.array(s.record(s.string(), s.unknown()))),
  },
  { additionalProperties: s.json() },
);
