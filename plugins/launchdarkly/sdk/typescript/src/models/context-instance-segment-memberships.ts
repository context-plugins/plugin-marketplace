import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  contextInstanceSegmentMembershipSchema,
  type ContextInstanceSegmentMembership,
} from "./context-instance-segment-membership.js";
import { linkSchema, type Link } from "./link.js";

export type ContextInstanceSegmentMemberships = {
  items: ContextInstanceSegmentMembership[];
  /** The location and content type of related resources */
  links: Record<string, Link>;
};

export const contextInstanceSegmentMembershipsSchema: Schema<ContextInstanceSegmentMemberships> =
  s.object<ContextInstanceSegmentMemberships>({
    items: s.array(s.lazy(() => contextInstanceSegmentMembershipSchema)),
    links: s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
    _keysMap: {
      links: "_links",
    },
  });
