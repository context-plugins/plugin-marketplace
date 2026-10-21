import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { layerConfigurationRepSchema, type LayerConfigurationRep } from "./layer-configuration-rep.js";

export type LayerRep = {
  /** The key of the layer */
  key: string;
  /** The name of the layer */
  name: string;
  /** The description of the layer */
  description: string;
  createdAt: number;
  /** The unit of randomization for the layer */
  randomizationUnit?: string;
  /** The layer configurations for each requested environment */
  environments?: Record<string, LayerConfigurationRep>;
};

export const layerRepSchema: Schema<LayerRep> = s.object<LayerRep>({
  key: s.string(),
  name: s.string(),
  description: s.string(),
  createdAt: s.int(),
  randomizationUnit: s.optional(s.string()),
  environments: s.optional(
    s.record(
      s.string(),
      s.lazy(() => layerConfigurationRepSchema),
    ),
  ),
});
