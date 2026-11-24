import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { callToActionTypeSchema, type CallToActionType } from "./call-to-action-type.js";

export type AdCreativeCreate = {
  name: string;
  /** Story specification including page, link, and media data */
  objectStorySpec: Record<string, unknown>;
  title?: string;
  body?: string;
  callToActionType?: CallToActionType;
  urlTags?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adCreativeCreateSchema: Schema<AdCreativeCreate> = s.object<AdCreativeCreate>(
  {
    name: s.string(),
    objectStorySpec: s.record(s.string(), s.unknown()),
    title: s.optional(s.string()),
    body: s.optional(s.string()),
    callToActionType: s.optional(s.lazy(() => callToActionTypeSchema)),
    urlTags: s.optional(s.string()),
    _keysMap: {
      objectStorySpec: "object_story_spec",
      callToActionType: "call_to_action_type",
      urlTags: "url_tags",
    },
  },
  { additionalProperties: s.json() },
);
