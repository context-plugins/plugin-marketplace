import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { parentAndSelfLinksSchema, type ParentAndSelfLinks } from "./parent-and-self-links.js";

/** Metric representation for Views API - contains only fields actually used by the Views service */
export type ExpandedMetric = {
  /** A unique key used to reference the metric */
  key?: string;
  /** A human-friendly name for the metric */
  name?: string;
  /** Creation date in milliseconds */
  creationDate?: number;
  /** Last modification date in milliseconds */
  lastModified?: number;
  /** Whether the metric is active */
  isActive?: boolean;
  /** Event key for the metric */
  eventKey?: string;
  /** ID of the metric */
  id?: string;
  /** Version ID of the metric */
  versionId?: string;
  /** Kind of the Metric */
  kind?: string;
  /** Category of the Metric */
  category?: string;
  /** Description of the Metric */
  description?: string;
  isNumeric?: boolean;
  /** Last seen date in milliseconds */
  lastSeen?: number;
  /** The location and content type of related resources */
  links?: ParentAndSelfLinks;
};

export const expandedMetricSchema: Schema<ExpandedMetric> = s.object<ExpandedMetric>({
  key: s.optional(s.string()),
  name: s.optional(s.string()),
  creationDate: s.optional(s.int()),
  lastModified: s.optional(s.int()),
  isActive: s.optional(s.boolean()),
  eventKey: s.optional(s.string()),
  id: s.optional(s.string()),
  versionId: s.optional(s.string()),
  kind: s.optional(s.string()),
  category: s.optional(s.string()),
  description: s.optional(s.string()),
  isNumeric: s.optional(s.boolean()),
  lastSeen: s.optional(s.int()),
  links: s.optional(s.lazy(() => parentAndSelfLinksSchema)),
  _keysMap: {
    id: "_id",
    versionId: "_versionId",
    links: "_links",
  },
});
