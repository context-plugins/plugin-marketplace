import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { colorAsanaTagsApiSchema, type ColorAsanaTagsApi } from "./color-asana-tags-api.js";

export type TagRequest = {
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
  /**
   * An array of strings identifying users. These can either be the string "me", an email, or the
   * gid of a user.
   */
  followers?: string[];
  /** Gid of an object. */
  workspace?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagRequestSchema: Schema<TagRequest> = s.object<TagRequest>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    name: s.optional(s.string()),
    color: s.optionalNullable(s.lazy(() => colorAsanaTagsApiSchema)),
    notes: s.optional(s.string()),
    followers: s.optional(s.array(s.string())),
    workspace: s.optional(s.string()),
    _keysMap: {
      resourceType: "resource_type",
    },
  },
  { additionalProperties: s.json() },
);
