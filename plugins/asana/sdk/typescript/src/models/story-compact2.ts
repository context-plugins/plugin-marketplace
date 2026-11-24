import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userCompactSchema, type UserCompact } from "./user-compact.js";

/**
 * *Conditional*
 */
export type StoryCompact2 = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The time at which this resource was created. */
  createdAt?: Date;
  createdBy?: UserCompact;
  /**
   * The subtype of this resource. Different subtypes retain many of the same fields and behavior,
   * but may render differently in Asana or represent resources with different semantic meaning.
   */
  resourceSubtype?: string;
  /**
   * *Create-only*. Human-readable text for the story or comment. This will not include the name of
   * the creator. *Note: This is not guaranteed to be stable for a given type of story. For example,
   * text for a reassignment may not always say “assigned to …” as the text for a story can both be
   * edited and change based on the language settings of the user making the request.* Use the
   * `resource_subtype` property to discover the action that created the story.
   */
  text?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storyCompact2Schema: Schema<StoryCompact2> = s.object<StoryCompact2>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    createdBy: s.optional(s.lazy(() => userCompactSchema)),
    resourceSubtype: s.optional(s.string()),
    text: s.optional(s.string()),
    _keysMap: {
      resourceType: "resource_type",
      createdAt: "created_at",
      createdBy: "created_by",
      resourceSubtype: "resource_subtype",
    },
  },
  { additionalProperties: s.json() },
);
