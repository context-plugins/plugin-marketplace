import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { memberSchema, type Member } from "./member.js";

/** A SCIM 2.0 Group resource representing a Contentstack user group. */
export type ScimGroup = {
  /** SCIM schema URNs for this resource. */
  schemas?: string[];
  /** SCIM-assigned unique identifier for the group. */
  id?: string;
  /** The display name of the group. */
  displayName?: string;
  /** List of user members in the group. */
  members?: Member[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scimGroupSchema: Schema<ScimGroup> = s.object<ScimGroup>(
  {
    schemas: s.optional(s.array(s.string())),
    id: s.optional(s.string()),
    displayName: s.optional(s.string()),
    members: s.optional(s.array(s.lazy(() => memberSchema))),
  },
  { additionalProperties: s.json() },
);
