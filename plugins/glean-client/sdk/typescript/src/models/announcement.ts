import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channel1Schema, type Channel1 } from "./channel1.js";
import { documentSchema, type Document } from "./document.js";
import { facetFilterSchema, type FacetFilter } from "./facet-filter.js";
import { favoriteInfoSchema, type FavoriteInfo } from "./favorite-info.js";
import { objectPermissionsSchema, type ObjectPermissions } from "./object-permissions.js";
import { personSchema, type Person } from "./person.js";
import { postTypeSchema, type PostType } from "./post-type.js";
import { structuredTextSchema, type StructuredText } from "./structured-text.js";
import { thumbnailSchema, type Thumbnail } from "./thumbnail.js";
import { viewerInfo1Schema, type ViewerInfo1 } from "./viewer-info1.js";

export type Announcement = {
  /** The date and time at which the announcement becomes active. */
  startTime?: Date;
  /** The date and time at which the announcement expires. */
  endTime?: Date;
  /** The headline of the announcement. */
  title?: string;
  body?: StructuredText;
  /** An emoji used to indicate the nature of the announcement. */
  emoji?: string;
  thumbnail?: Thumbnail;
  banner?: Thumbnail;
  /**
   * Filters which restrict who should see the announcement. Values are taken from the corresponding
   * filters in people search.
   */
  audienceFilters?: FacetFilter[];
  /**
   * The Glean Document ID of the source document this Announcement was created from (e.g. Slack
   * thread).
   */
  sourceDocumentId?: string;
  /** Whether or not to hide an author attribution. */
  hideAttribution?: boolean;
  /** This determines whether this is a Social Feed post or a regular announcement. */
  channel?: Channel1;
  /**
   * This determines whether this is an external-link post or a regular announcement post. TEXT -
   * Regular announcement that can contain rich text. LINK - Announcement that is linked to an
   * external site.
   */
  postType?: PostType;
  /** Used by the Social Feed to pin posts to the front of the feed. */
  isPrioritized?: boolean;
  /**
   * URL for viewing the announcement. It will be set to document URL for announcements from other
   * datasources e.g. simpplr. Can only be written when channel="SOCIAL_FEED".
   */
  viewUrl?: string;
  /** The opaque id of the associated draft. */
  draftId?: number;
  permissions?: ObjectPermissions;
  /** An opaque token that represents this particular UGC. To be used for `/feedback` reporting. */
  trackingToken?: string;
  /** The opaque id of the announcement. */
  id?: number;
  author?: Person;
  /** Server Unix timestamp of the creation time (in seconds since epoch UTC). */
  createTimestamp?: number;
  /** Server Unix timestamp of the last update time (in seconds since epoch UTC). */
  lastUpdateTimestamp?: number;
  updatedBy?: Person;
  viewerInfo?: ViewerInfo1;
  sourceDocument?: Document;
  /** Whether or not the announcement is published. */
  isPublished?: boolean;
  favoriteInfo?: FavoriteInfo;
};

export const announcementSchema: Schema<Announcement> = s.object<Announcement>({
  startTime: s.optional(s.dateTime()),
  endTime: s.optional(s.dateTime()),
  title: s.optional(s.string()),
  body: s.optional(s.lazy(() => structuredTextSchema)),
  emoji: s.optional(s.string()),
  thumbnail: s.optional(s.lazy(() => thumbnailSchema)),
  banner: s.optional(s.lazy(() => thumbnailSchema)),
  audienceFilters: s.optional(s.array(s.lazy(() => facetFilterSchema))),
  sourceDocumentId: s.optional(s.string()),
  hideAttribution: s.optional(s.boolean()),
  channel: s.optional(s.lazy(() => channel1Schema)),
  postType: s.optional(s.lazy(() => postTypeSchema)),
  isPrioritized: s.optional(s.boolean()),
  viewUrl: s.optional(s.string()),
  draftId: s.optional(s.int()),
  permissions: s.optional(s.lazy(() => objectPermissionsSchema)),
  trackingToken: s.optional(s.string()),
  id: s.optional(s.int()),
  author: s.optional(s.lazy(() => personSchema)),
  createTimestamp: s.optional(s.int()),
  lastUpdateTimestamp: s.optional(s.int()),
  updatedBy: s.optional(s.lazy(() => personSchema)),
  viewerInfo: s.optional(s.lazy(() => viewerInfo1Schema)),
  sourceDocument: s.optional(s.lazy(() => documentSchema)),
  isPublished: s.optional(s.boolean()),
  favoriteInfo: s.optional(s.lazy(() => favoriteInfoSchema)),
});
