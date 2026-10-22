import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { relatedObjectEdgeSchema, type RelatedObjectEdge } from "./related-object-edge.js";

export type RelatedObjects = {
  /** A list of objects related to a source object. */
  relatedObjects?: Record<string, RelatedObjectEdge>;
};

export const relatedObjectsSchema: Schema<RelatedObjects> = s.object<RelatedObjects>({
  relatedObjects: s.optional(
    s.record(
      s.string(),
      s.lazy(() => relatedObjectEdgeSchema),
    ),
  ),
});
