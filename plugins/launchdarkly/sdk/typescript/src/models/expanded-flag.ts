import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expandedFlagMaintainerSchema, type ExpandedFlagMaintainer } from "./expanded-flag-maintainer.js";
import { parentAndSelfLinksSchema, type ParentAndSelfLinks } from "./parent-and-self-links.js";

/** Flag representation for Views API - contains only fields actually used by the Views service */
export type ExpandedFlag = {
  /** A unique key used to reference the flag */
  key: string;
  /** A human-friendly name for the flag */
  name: string;
  /** Description of the flag */
  description?: string;
  /** Creation date in milliseconds */
  creationDate?: number;
  /** Version of the flag */
  version?: number;
  /** Whether the flag is archived */
  archived?: boolean;
  /** Tags for the flag */
  tags?: string[];
  /** Whether the flag is temporary */
  temporary?: boolean;
  /** Whether to include in snippet */
  includeInSnippet?: boolean;
  maintainer?: ExpandedFlagMaintainer;
  /** The location and content type of related resources */
  links?: ParentAndSelfLinks;
};

export const expandedFlagSchema: Schema<ExpandedFlag> = s.object<ExpandedFlag>({
  key: s.string(),
  name: s.string(),
  description: s.optional(s.string()),
  creationDate: s.optional(s.int()),
  version: s.optional(s.int()),
  archived: s.optional(s.boolean()),
  tags: s.optional(s.array(s.string())),
  temporary: s.optional(s.boolean()),
  includeInSnippet: s.optional(s.boolean()),
  maintainer: s.optional(s.lazy(() => expandedFlagMaintainerSchema)),
  links: s.optional(s.lazy(() => parentAndSelfLinksSchema)),
  _keysMap: {
    version: "_version",
    links: "_links",
  },
});
