import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { colorAsanaTagsApiSchema, type ColorAsanaTagsApi } from "./color-asana-tags-api.js";
import { userCompactSchema, type UserCompact } from "./user-compact.js";
import { workspaceCompactSchema, type WorkspaceCompact } from "./workspace-compact.js";

export type TagResponse = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /**
   * Name of the tag. This is generally a short sentence fragment that fits on a line in the UI for
   * maximum readability. However, it can be longer.
   */
  name?: string;
  /** Color of the tag. */
  color?: ColorAsanaTagsApi | null;
  /** Free-form textual information associated with the tag (i.e. its description). */
  notes?: string;
  /** The time at which this resource was created. */
  createdAt?: Date;
  /** Array of users following this tag. */
  followers?: UserCompact[];
  workspace?: WorkspaceCompact;
  /** A url that points directly to the object within Asana. */
  permalinkUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagResponseSchema: Schema<TagResponse> = s.object<TagResponse>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    name: s.optional(s.string()),
    color: s.optionalNullable(s.lazy(() => colorAsanaTagsApiSchema)),
    notes: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    followers: s.optional(s.array(s.lazy(() => userCompactSchema))),
    workspace: s.optional(s.lazy(() => workspaceCompactSchema)),
    permalinkUrl: s.optional(s.string()),
    _keysMap: {
      resourceType: "resource_type",
      createdAt: "created_at",
      permalinkUrl: "permalink_url",
    },
  },
  { additionalProperties: s.json() },
);
