import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceObjectSchema, type SourceObject } from "./source-object.js";

/**
 * Source catalog data source objects to avoid backfilling. This is mainly used to represent SaaS
 * applications objects.
 */
export type SourceCatalog2 = {
  /** Optional. Source objects in the catalog. */
  objects?: SourceObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceCatalog2Schema: Schema<SourceCatalog2> = s.object<SourceCatalog2>(
  {
    objects: s.optional(s.array(s.lazy(() => sourceObjectSchema))),
  },
  { additionalProperties: s.json() },
);
