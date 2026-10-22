import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LayerPost = {
  /** Unique identifier for the layer */
  key: string;
  /** Layer name */
  name: string;
  /** The checkout flow for the application */
  description: string;
};

export const layerPostSchema: Schema<LayerPost> = s.object<LayerPost>({
  key: s.string(),
  name: s.string(),
  description: s.string(),
});
