import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { parentAndSelfLinksSchema, type ParentAndSelfLinks } from "./parent-and-self-links.js";

/**
 * AI Config representation for Views API - contains only fields actually used by the Views service
 */
export type ExpandedAiConfig = {
  /** A unique key used to reference the AI config */
  key?: string;
  /** A human-friendly name for the AI config */
  name?: string;
  /** Tags for the AI config */
  tags?: string[];
  /** Description of the AI config */
  description?: string;
  /** Version of the AI config */
  version?: number;
  /** Creation date in milliseconds */
  createdAt?: number;
  /** Last modification date in milliseconds */
  updatedAt?: number;
  /** Key of the flag that this AI config is attached to */
  flagKey?: string;
  /** The location and content type of related resources */
  links?: ParentAndSelfLinks;
};

export const expandedAiConfigSchema: Schema<ExpandedAiConfig> = s.object<ExpandedAiConfig>({
  key: s.optional(s.string()),
  name: s.optional(s.string()),
  tags: s.optional(s.array(s.string())),
  description: s.optional(s.string()),
  version: s.optional(s.int()),
  createdAt: s.optional(s.int()),
  updatedAt: s.optional(s.int()),
  flagKey: s.optional(s.string()),
  links: s.optional(s.lazy(() => parentAndSelfLinksSchema)),
  _keysMap: {
    links: "_links",
  },
});
