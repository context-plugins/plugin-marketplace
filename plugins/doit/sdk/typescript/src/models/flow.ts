import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { incompleteNodeSchema, type IncompleteNode } from "./incomplete-node.js";

export type Flow = {
  key: string;
  /** The created flow's ID in the target tenant. */
  id: string;
  name: string;
  /** @default "draft" */
  status?: "draft";
  /**
   * Nodes whose tenant-scoped references could not be bound; fix them in the builder before
   * publishing.
   */
  incompleteNodes?: IncompleteNode[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const flowSchema: Schema<Flow> = s.object<Flow>(
  {
    key: s.string(),
    id: s.string(),
    name: s.string(),
    status: s.defaulted(s.literal("draft"), "draft"),
    incompleteNodes: s.optional(s.array(s.lazy(() => incompleteNodeSchema))),
  },
  { additionalProperties: s.json() },
);
