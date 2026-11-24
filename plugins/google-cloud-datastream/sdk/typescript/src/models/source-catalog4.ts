import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceObjectSchema, type SourceObject } from "./source-object.js";

/**
 * Optional. Source catalog to enrich with child data objects and metadata. This is mainly used to
 * represent SaaS sources databases.
 */
export type SourceCatalog4 = {
  /** Optional. Source objects in the catalog. */
  objects?: SourceObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceCatalog4Schema: Schema<SourceCatalog4> = s.object<SourceCatalog4>(
  {
    objects: s.optional(s.array(s.lazy(() => sourceObjectSchema))),
  },
  { additionalProperties: s.json() },
);
