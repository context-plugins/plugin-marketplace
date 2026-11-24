import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { relationSchema, type Relation } from "./relation.js";
import { type2Schema, type Type2 } from "./type2.js";

/** One related resource returned by the traversal. */
export type DiagramRelationship = {
  /** Related resource ID. */
  id: string;
  /** Component bucket the related resource lives in. */
  type: Type2;
  /** Human-readable name of the related resource. */
  name: string;
  /** Cloud service type when available. */
  serviceType?: string;
  /**
   * How the resource is related to the anchor. `downstream` / `upstream` are edge relations (anchor
   * is the edge origin / destination respectively). `group_member` means the related resource is
   * contained in the anchor (anchor is a group); `group_parent` means the related resource is a
   * group that contains the anchor.
   */
  relation: Relation;
  /** Edge hop count from the anchor. Group-member / group-parent entries are reported as 1. */
  hops: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const diagramRelationshipProperties: s.Shape<DiagramRelationship> = {
  id: s.string(),
  type: type2Schema,
  name: s.string(),
  serviceType: s.optional(s.string()),
  relation: relationSchema,
  hops: s.int(),
};

export const diagramRelationshipInternalSchema: Schema<DiagramRelationship> = s.object<DiagramRelationship>(
  diagramRelationshipProperties,
  { additionalProperties: s.json() },
);

export const diagramRelationshipSchema: Schema<DiagramRelationship> = s.lazySchema(() =>
  s.object<DiagramRelationship>(
    {
      ...diagramRelationshipProperties,
      hops: s.int().check(s.gte(1)),
    },
    { additionalProperties: s.json() },
  ),
);
