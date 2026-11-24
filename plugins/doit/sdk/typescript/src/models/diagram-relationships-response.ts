import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { depthSchema, type Depth } from "./depth.js";
import {
  diagramRelationshipInternalSchema,
  diagramRelationshipSchema,
  type DiagramRelationship,
} from "./diagram-relationship.js";
import {
  diagramRelationshipsAnchorSchema,
  type DiagramRelationshipsAnchor,
} from "./diagram-relationships-anchor.js";
import { directionSchema, type Direction } from "./direction.js";
import { kindSchema, type Kind } from "./kind.js";

/** The response payload for the resource relationships endpoint. */
export type DiagramRelationshipsResponse = {
  /** The anchor resource the traversal started from. */
  anchor: DiagramRelationshipsAnchor;
  direction: Direction;
  depth: Depth;
  kind: Kind;
  /** Resources related to the anchor (capped at 200). */
  relations: DiagramRelationship[];
  /** True when the relation list was capped at 200 entries. */
  truncated: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const diagramRelationshipsResponseProperties: s.Shape<DiagramRelationshipsResponse> = {
  anchor: diagramRelationshipsAnchorSchema,
  direction: directionSchema,
  depth: depthSchema,
  kind: kindSchema,
  relations: s.array(s.lazy(() => diagramRelationshipInternalSchema)),
  truncated: s.boolean(),
};

export const diagramRelationshipsResponseInternalSchema: Schema<DiagramRelationshipsResponse> =
  s.object<DiagramRelationshipsResponse>(diagramRelationshipsResponseProperties, {
    additionalProperties: s.json(),
  });

export const diagramRelationshipsResponseSchema: Schema<DiagramRelationshipsResponse> = s.lazySchema(() =>
  s.object<DiagramRelationshipsResponse>(
    {
      ...diagramRelationshipsResponseProperties,
      relations: s.array(s.lazy(() => diagramRelationshipSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
