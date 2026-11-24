import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { memberSchema, type Member } from "./member.js";
import { scimMetaSchema, type ScimMeta } from "./scim-meta.js";

/** A SCIM 2.0 Group resource representing a user group. */
export type ScimGroup = {
  schemas: string[];
  /** The unique identifier for the SCIM group resource. */
  id: string;
  /** The display name of the group. */
  displayName: string;
  /** The members of the group. */
  members?: Member[];
  /** SCIM resource metadata. */
  meta?: ScimMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scimGroupSchema: Schema<ScimGroup> = s.object<ScimGroup>(
  {
    schemas: s.array(s.string()),
    id: s.string(),
    displayName: s.string(),
    members: s.optional(s.array(s.lazy(() => memberSchema))),
    meta: s.optional(s.lazy(() => scimMetaSchema)),
  },
  { additionalProperties: s.json() },
);
