import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** OpenRouter model metadata. */
export type OpenRouterModelMetadata = {
  /** OpenRouter model slug. */
  slug: string;
};

export const openRouterModelMetadataSchema: Schema<OpenRouterModelMetadata> =
  s.object<OpenRouterModelMetadata>({
    slug: s.string(),
  });
