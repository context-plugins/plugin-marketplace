import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  openRouterModelMetadataSchema,
  type OpenRouterModelMetadata,
} from "../open-router-model-metadata.js";

export type Openrouter = OpenRouterModelMetadata;

export const openrouterSchema: Schema<Openrouter> = s.of<Openrouter>(
  s.union([s.lazy(() => openRouterModelMetadataSchema)]),
);
