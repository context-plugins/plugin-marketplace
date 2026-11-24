import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stickerNameSchema, type StickerName } from "./sticker-name.js";

export type StoryBase = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The time at which this resource was created. */
  createdAt?: Date;
  /**
   * The subtype of this resource. Different subtypes retain many of the same fields and behavior,
   * but may render differently in Asana or represent resources with different semantic meaning.
   */
  resourceSubtype?: string;
  /** The plain text of the comment to add. Cannot be used with html_text. */
  text?: string;
  /**
   * [Opt In](/docs/input-output-options). HTML formatted text for a comment. This will not include
   * the name of the creator.
   */
  htmlText?: string;
  /** *Conditional*. Whether the story should be pinned on the resource. */
  isPinned?: boolean;
  /** The name of the sticker in this story. `null` if there is no sticker. */
  stickerName?: StickerName;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storyBaseSchema: Schema<StoryBase> = s.object<StoryBase>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    resourceSubtype: s.optional(s.string()),
    text: s.optional(s.string()),
    htmlText: s.optional(s.string()),
    isPinned: s.optional(s.boolean()),
    stickerName: s.optional(s.lazy(() => stickerNameSchema)),
    _keysMap: {
      resourceType: "resource_type",
      createdAt: "created_at",
      resourceSubtype: "resource_subtype",
      htmlText: "html_text",
      isPinned: "is_pinned",
      stickerName: "sticker_name",
    },
  },
  { additionalProperties: s.json() },
);
