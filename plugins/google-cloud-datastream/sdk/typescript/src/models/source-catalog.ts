import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceObjectSchema, type SourceObject } from "./source-object.js";

/** Source catalog. */
export type SourceCatalog = {
  /** Optional. Source objects in the catalog. */
  objects?: SourceObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceCatalogSchema: Schema<SourceCatalog> = s.object<SourceCatalog>(
  {
    objects: s.optional(s.array(s.lazy(() => sourceObjectSchema))),
  },
  { additionalProperties: s.json() },
);
