import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceObjectSchema, type SourceObject } from "./source-object.js";

/** Optional. The objects to retrieve from the source. */
export type SourceCatalog5 = {
  /** Optional. Source objects in the catalog. */
  objects?: SourceObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceCatalog5Schema: Schema<SourceCatalog5> = s.object<SourceCatalog5>(
  {
    objects: s.optional(s.array(s.lazy(() => sourceObjectSchema))),
  },
  { additionalProperties: s.json() },
);
