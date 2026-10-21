import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Normalized web search global settings returned by getWebSearchProviders */
export type WebSearchSettings = {
  /** Whether to include images in search results */
  includeImages: boolean;
  /** Maximum number of images to return when includeImages is true */
  maxImages?: number;
};

export const webSearchSettingsSchema: Schema<WebSearchSettings> = s.object<WebSearchSettings>({
  includeImages: s.boolean(),
  maxImages: s.optional(s.int()),
});
