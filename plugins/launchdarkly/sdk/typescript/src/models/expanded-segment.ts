import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { parentAndSelfLinksSchema, type ParentAndSelfLinks } from "./parent-and-self-links.js";

/**
 * Segment representation for Views API - contains only fields actually used by the Views service
 */
export type ExpandedSegment = {
  /** A unique key used to reference the segment */
  key: string;
  /** A human-friendly name for the segment */
  name: string;
  /** Environment ID of the segment */
  environmentId?: string;
  /** Environment key of the segment */
  environmentKey?: string;
  /** Description of the segment */
  description?: string;
  /** Creation date in milliseconds */
  creationDate?: number;
  /** Last modification date in milliseconds */
  lastModifiedDate?: number;
  /** Whether the segment is deleted */
  deleted?: boolean;
  /** Tags for the segment */
  tags?: string[];
  /** Whether the segment is unbounded */
  unbounded?: boolean;
  /** Version of the segment */
  version?: number;
  /** Generation of the segment */
  generation?: number;
  /** The location and content type of related resources */
  links?: ParentAndSelfLinks;
};

export const expandedSegmentSchema: Schema<ExpandedSegment> = s.object<ExpandedSegment>({
  key: s.string(),
  name: s.string(),
  environmentId: s.optional(s.string()),
  environmentKey: s.optional(s.string()),
  description: s.optional(s.string()),
  creationDate: s.optional(s.int()),
  lastModifiedDate: s.optional(s.int()),
  deleted: s.optional(s.boolean()),
  tags: s.optional(s.array(s.string())),
  unbounded: s.optional(s.boolean()),
  version: s.optional(s.int()),
  generation: s.optional(s.int()),
  links: s.optional(s.lazy(() => parentAndSelfLinksSchema)),
  _keysMap: {
    links: "_links",
  },
});
