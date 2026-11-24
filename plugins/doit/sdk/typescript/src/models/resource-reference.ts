import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Reference to another resource, used when listing blockers or usages. */
export type ResourceReference = {
  /** Resource identifier */
  id?: string;
  /** Resource name */
  name?: string;
  /** Resource owner (only present if requester doesn't have access) */
  owner?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceReferenceSchema: Schema<ResourceReference> = s.object<ResourceReference>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    owner: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
