import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cloudDiagramCombinerItemSchema,
  type CloudDiagramCombinerItem,
} from "./cloud-diagram-combiner-item.js";

/** A combiner component that visually groups multiple components. */
export type CloudDiagramCombiner = {
  /** Combiner ID. */
  id: string;
  /** Combiner name. */
  name?: string;
  /** Combiner color. */
  color?: string;
  /** Combiner icon identifier. */
  icon?: string;
  /** Components contained in the combiner. */
  items?: CloudDiagramCombinerItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudDiagramCombinerSchema: Schema<CloudDiagramCombiner> = s.object<CloudDiagramCombiner>(
  {
    id: s.string(),
    name: s.optional(s.string()),
    color: s.optional(s.string()),
    icon: s.optional(s.string()),
    items: s.optional(s.array(s.lazy(() => cloudDiagramCombinerItemSchema))),
    _keysMap: {
      id: "_id",
    },
  },
  { additionalProperties: s.json() },
);
