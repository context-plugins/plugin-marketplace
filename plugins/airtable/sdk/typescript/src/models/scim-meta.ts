import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** SCIM resource metadata. */
export type ScimMeta = {
  /** The type of resource (User or Group). */
  resourceType?: string;
  /** The time when the resource was created. */
  created?: Date;
  /** The time when the resource was last modified. */
  lastModified?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scimMetaSchema: Schema<ScimMeta> = s.object<ScimMeta>(
  {
    resourceType: s.optional(s.string()),
    created: s.optional(s.dateTime()),
    lastModified: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
