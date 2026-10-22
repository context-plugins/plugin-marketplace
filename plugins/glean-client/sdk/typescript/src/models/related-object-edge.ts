import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { relatedObjectSchema, type RelatedObject } from "./related-object.js";

export type RelatedObjectEdge = {
  objects?: RelatedObject[];
};

export const relatedObjectEdgeSchema: Schema<RelatedObjectEdge> = s.object<RelatedObjectEdge>({
  objects: s.optional(s.array(s.lazy(() => relatedObjectSchema))),
});
