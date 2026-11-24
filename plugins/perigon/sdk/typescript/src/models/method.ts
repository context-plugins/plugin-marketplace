import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Article selection method. ARTICLES selects up to maxArticleCount matching articles; CLUSTERS
 * selects the first article from each of up to maxArticleCount stories.
 */
export const Method = {
  Articles: "ARTICLES",
  Clusters: "CLUSTERS",
} as const;
export type Method = (typeof Method)[keyof typeof Method] | (string & {});

export const methodSchema: EnumSchema<Method> = s.enumOf<Method>(Method);
