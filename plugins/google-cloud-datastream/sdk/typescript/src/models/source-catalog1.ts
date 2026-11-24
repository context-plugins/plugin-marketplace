import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceObjectSchema, type SourceObject } from "./source-object.js";

/** Optional. The objects to exclude from the stream. */
export type SourceCatalog1 = {
  /** Optional. Source objects in the catalog. */
  objects?: SourceObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceCatalog1Schema: Schema<SourceCatalog1> = s.object<SourceCatalog1>(
  {
    objects: s.optional(s.array(s.lazy(() => sourceObjectSchema))),
  },
  { additionalProperties: s.json() },
);
