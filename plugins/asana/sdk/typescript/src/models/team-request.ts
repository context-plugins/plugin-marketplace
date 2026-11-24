import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { visibilitySchema, type Visibility } from "./visibility.js";

export type TeamRequest = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The name of the team. */
  name?: string;
  /** The description of the team. */
  description?: string;
  /** The description of the team with formatting as HTML. */
  htmlDescription?: string;
  /**
   * The organization/workspace the team belongs to. This must be the same organization you are in
   * and cannot be changed once set.
   */
  organization?: string;
  /** The visibility of the team to users in the same organization */
  visibility?: Visibility;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamRequestSchema: Schema<TeamRequest> = s.object<TeamRequest>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    htmlDescription: s.optional(s.string()),
    organization: s.optional(s.string()),
    visibility: s.optional(s.lazy(() => visibilitySchema)),
    _keysMap: {
      resourceType: "resource_type",
      htmlDescription: "html_description",
    },
  },
  { additionalProperties: s.json() },
);
