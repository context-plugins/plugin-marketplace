import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type ContextInstanceSegmentMembership = {
  /** A human-friendly name for the segment */
  name: string;
  /** A unique key used to reference the segment */
  key: string;
  /** A description of the segment's purpose */
  description: string;
  /**
   * Whether this is an unbounded segment. Unbounded segments, also called big segments, may be
   * list-based segments with more than 15,000 entries, or synced segments.
   */
  unbounded: boolean;
  /** If the segment is a synced segment, the name of the external source */
  external: string;
  /**
   * Whether the context is a member of this segment, either by explicit inclusion or by rule
   * matching
   */
  isMember: boolean;
  /** Whether the context is explicitly included in this segment */
  isIndividuallyTargeted: boolean;
  /**
   * Whether the context is captured by this segment's rules. The value of this field is undefined
   * if the context is also explicitly included (<code>isIndividuallyTargeted</code> is
   * <code>true</code>).
   */
  isRuleTargeted: boolean;
  /** The location and content type of related resources */
  links: Record<string, Link>;
};

export const contextInstanceSegmentMembershipSchema: Schema<ContextInstanceSegmentMembership> =
  s.object<ContextInstanceSegmentMembership>({
    name: s.string(),
    key: s.string(),
    description: s.string(),
    unbounded: s.boolean(),
    external: s.string(),
    isMember: s.boolean(),
    isIndividuallyTargeted: s.boolean(),
    isRuleTargeted: s.boolean(),
    links: s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
    _keysMap: {
      links: "_links",
    },
  });
