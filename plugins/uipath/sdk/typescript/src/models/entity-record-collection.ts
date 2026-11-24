import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entityRecordSchema, type EntityRecord } from "./entity-record.js";

/** A paginated collection of entity records */
export type EntityRecordCollection = {
  /** Total number of records matching the query */
  totalCount?: number;
  /** Array of entity records for the current page */
  value?: EntityRecord[];
  /** URL for the next page of results, if more records are available */
  nextLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const entityRecordCollectionProperties: s.Shape<EntityRecordCollection> = {
  totalCount: s.optional(s.int()),
  value: s.optional(s.array(s.lazy(() => entityRecordSchema))),
  nextLink: s.optional(s.string()),
};

export const entityRecordCollectionInternalSchema: Schema<EntityRecordCollection> =
  s.object<EntityRecordCollection>(entityRecordCollectionProperties, { additionalProperties: s.json() });

export const entityRecordCollectionSchema: Schema<EntityRecordCollection> = s.lazySchema(() =>
  s.object<EntityRecordCollection>(
    {
      ...entityRecordCollectionProperties,
      nextLink: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
