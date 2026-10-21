import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { layerRepSchema, type LayerRep } from "./layer-rep.js";
import { linkSchema, type Link } from "./link.js";

export type LayerCollectionRep = {
  /** The layers in the project */
  items: LayerRep[];
  /** The total number of layers in the project */
  totalCount: number;
  /** The location and content type of related resources */
  links: Record<string, Link>;
};

export const layerCollectionRepSchema: Schema<LayerCollectionRep> = s.object<LayerCollectionRep>({
  items: s.array(s.lazy(() => layerRepSchema)),
  totalCount: s.int(),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  _keysMap: {
    links: "_links",
  },
});
