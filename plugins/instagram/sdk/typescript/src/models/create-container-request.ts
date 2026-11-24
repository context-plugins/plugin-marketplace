import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  mediaTypeInstagramGraphPublishingApiSchema,
  type MediaTypeInstagramGraphPublishingApi,
} from "./media-type-instagram-graph-publishing-api.js";
import { userTagSchema, type UserTag } from "./user-tag.js";

export type CreateContainerRequest = {
  /** Public URL of the image to publish. */
  imageUrl?: string;
  /** Public URL of the video to publish. */
  videoUrl?: string;
  /** Caption text for the media. */
  caption?: string;
  /** Type of media to publish. */
  mediaType?: MediaTypeInstagramGraphPublishingApi;
  /** Set to true if this is an item in a carousel. */
  isCarouselItem?: boolean;
  /** Facebook Page ID of a location to tag. */
  locationId?: string;
  /** Users to tag in the media. */
  userTags?: UserTag[];
  accessToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createContainerRequestSchema: Schema<CreateContainerRequest> = s.object<CreateContainerRequest>(
  {
    imageUrl: s.optional(s.string()),
    videoUrl: s.optional(s.string()),
    caption: s.optional(s.string()),
    mediaType: s.optional(s.lazy(() => mediaTypeInstagramGraphPublishingApiSchema)),
    isCarouselItem: s.optional(s.boolean()),
    locationId: s.optional(s.string()),
    userTags: s.optional(s.array(s.lazy(() => userTagSchema))),
    accessToken: s.optional(s.string()),
    _keysMap: {
      imageUrl: "image_url",
      videoUrl: "video_url",
      mediaType: "media_type",
      isCarouselItem: "is_carousel_item",
      locationId: "location_id",
      userTags: "user_tags",
      accessToken: "access_token",
    },
  },
  { additionalProperties: s.json() },
);
