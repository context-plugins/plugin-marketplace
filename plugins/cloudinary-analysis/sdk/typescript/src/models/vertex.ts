import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Vertex = {
  x?: number;
  y?: number;
};

export const vertexSchema: Schema<Vertex> = s.object<Vertex>({
  x: s.optional(s.int()),
  y: s.optional(s.int()),
});
