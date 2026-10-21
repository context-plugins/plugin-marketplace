import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { vertexSchema, type Vertex } from "./vertex.js";

export type BoundingPoly = {
  vertices?: Vertex[];
};

export const boundingPolySchema: Schema<BoundingPoly> = s.object<BoundingPoly>({
  vertices: s.optional(s.array(s.lazy(() => vertexSchema))),
});
