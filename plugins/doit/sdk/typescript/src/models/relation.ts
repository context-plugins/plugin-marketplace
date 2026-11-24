import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How the resource is related to the anchor. `downstream` / `upstream` are edge relations (anchor
 * is the edge origin / destination respectively). `group_member` means the related resource is
 * contained in the anchor (anchor is a group); `group_parent` means the related resource is a group
 * that contains the anchor.
 */
export const Relation = {
  Downstream: "downstream",
  Upstream: "upstream",
  GroupMember: "group_member",
  GroupParent: "group_parent",
} as const;
export type Relation = (typeof Relation)[keyof typeof Relation] | (string & {});

export const relationSchema: EnumSchema<Relation> = s.enumOf<Relation>(Relation);
