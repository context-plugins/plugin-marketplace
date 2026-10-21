import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { flagListingRepSchema, type FlagListingRep } from "./flag-listing-rep.js";
import { linkSchema, type Link } from "./link.js";
import { segmentMetadataSchema, type SegmentMetadata } from "./segment-metadata.js";
import { segmentTargetSchema, type SegmentTarget } from "./segment-target.js";
import { userSegmentRuleSchema, type UserSegmentRule } from "./user-segment-rule.js";

export type UserSegment = {
  /** A human-friendly name for the segment. */
  name: string;
  /**
   * A description of the segment's purpose. Defaults to <code>null</code> and is omitted in the
   * response if not provided.
   */
  description?: string;
  /** Tags for the segment. Defaults to an empty array. */
  tags: string[];
  creationDate: number;
  lastModifiedDate: number;
  /** A unique key used to reference the segment */
  key: string;
  /**
   * An array of keys for included targets. Included individual targets are always segment members,
   * regardless of segment rules. For list-based segments over 15,000 entries, also called big
   * segments, this array is either empty or omitted.
   */
  included?: string[];
  /**
   * An array of keys for excluded targets. Segment rules bypass individual excluded targets, so
   * they will never be included based on rules. Excluded targets may still be included explicitly.
   * This value is omitted for list-based segments over 15,000 entries, also called big segments.
   */
  excluded?: string[];
  includedContexts?: SegmentTarget[];
  excludedContexts?: SegmentTarget[];
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** An array of the targeting rules for this segment. */
  rules: UserSegmentRule[];
  /** Version of the segment */
  version: number;
  /** Whether the segment has been deleted */
  deleted: boolean;
  access?: Access;
  /**
   * A list of flags targeting this segment. Only included when getting a single segment, using the
   * <code>getSegment</code> endpoint.
   */
  flags?: FlagListingRep[];
  /**
   * Whether this is a standard segment (<code>false</code>) or a big segment (<code>true</code>).
   * Standard segments include rule-based segments and smaller list-based segments. Big segments
   * include larger list-based segments and synced segments. If omitted, the segment is a standard
   * segment.
   */
  unbounded?: boolean;
  /** For big segments, the targeted context kind. */
  unboundedContextKind?: string;
  /** For big segments, how many times this segment has been created. */
  generation: number;
  unboundedMetadata?: SegmentMetadata;
  /** The external data store backing this segment. Only applies to synced segments. */
  external?: string;
  /** The URL for the external data store backing this segment. Only applies to synced segments. */
  externalLink?: string;
  /**
   * Whether an import is currently in progress for the specified segment. Only applies to big
   * segments.
   */
  importInProgress?: boolean;
};

export const userSegmentSchema: Schema<UserSegment> = s.object<UserSegment>({
  name: s.string(),
  description: s.optional(s.string()),
  tags: s.array(s.string()),
  creationDate: s.int(),
  lastModifiedDate: s.int(),
  key: s.string(),
  included: s.optional(s.array(s.string())),
  excluded: s.optional(s.array(s.string())),
  includedContexts: s.optional(s.array(s.lazy(() => segmentTargetSchema))),
  excludedContexts: s.optional(s.array(s.lazy(() => segmentTargetSchema))),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  rules: s.array(s.lazy(() => userSegmentRuleSchema)),
  version: s.int(),
  deleted: s.boolean(),
  access: s.optional(s.lazy(() => accessSchema)),
  flags: s.optional(s.array(s.lazy(() => flagListingRepSchema))),
  unbounded: s.optional(s.boolean()),
  unboundedContextKind: s.optional(s.string()),
  generation: s.int(),
  unboundedMetadata: s.optional(s.lazy(() => segmentMetadataSchema)),
  external: s.optional(s.string()),
  externalLink: s.optional(s.string()),
  importInProgress: s.optional(s.boolean()),
  _keysMap: {
    links: "_links",
    access: "_access",
    flags: "_flags",
    unboundedMetadata: "_unboundedMetadata",
    external: "_external",
    externalLink: "_externalLink",
    importInProgress: "_importInProgress",
  },
});
