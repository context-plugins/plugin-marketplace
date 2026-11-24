import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { callToActionType1Schema, type CallToActionType1 } from "./call-to-action-type1.js";

export type AdCreative = {
  /** The ID of the ad creative */
  id?: string;
  /** The name of the ad creative */
  name?: string;
  /**
   * Specification for the story that will appear in the ad, including page ID, link data, and
   * media.
   */
  objectStorySpec?: Record<string, unknown>;
  /** The title of the ad */
  title?: string;
  /** The body text of the ad */
  body?: string;
  /** URL of the ad image */
  imageUrl?: string;
  /** The call-to-action button type */
  callToActionType?: CallToActionType1;
  /** Destination URL for the ad */
  linkUrl?: string;
  /** URL tags for tracking parameters */
  urlTags?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const adCreativeProperties: s.Shape<AdCreative> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  objectStorySpec: s.optional(s.record(s.string(), s.unknown())),
  title: s.optional(s.string()),
  body: s.optional(s.string()),
  imageUrl: s.optional(s.string()),
  callToActionType: s.optional(s.lazy(() => callToActionType1Schema)),
  linkUrl: s.optional(s.string()),
  urlTags: s.optional(s.string()),
  _keysMap: {
    objectStorySpec: "object_story_spec",
    imageUrl: "image_url",
    callToActionType: "call_to_action_type",
    linkUrl: "link_url",
    urlTags: "url_tags",
  },
};

export const adCreativeInternalSchema: Schema<AdCreative> = s.object<AdCreative>(adCreativeProperties, {
  additionalProperties: s.json(),
});

export const adCreativeSchema: Schema<AdCreative> = s.lazySchema(() =>
  s.object<AdCreative>(
    {
      ...adCreativeProperties,
      imageUrl: s.optional(s.string().check(s.url())),
      linkUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
