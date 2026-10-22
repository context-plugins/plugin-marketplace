import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayActionMappingSchema, type DisplayActionMapping } from "./display-action-mapping.js";
import { displayPhraseMappingSchema, type DisplayPhraseMapping } from "./display-phrase-mapping.js";
import { contentAvatarimageurlSchema, type ContentAvatarimageurl } from "./unions/content-avatarimageurl.js";
import {
  contentContentalwaysleftSchema,
  type ContentContentalwaysleft,
} from "./unions/content-contentalwaysleft.js";
import { contentDescriptionSchema, type ContentDescription } from "./unions/content-description.js";
import { contentHeaderSchema, type ContentHeader } from "./unions/content-header.js";
import { contentSubheaderSchema, type ContentSubheader } from "./unions/content-subheader.js";
import { ctaSchema, type Cta } from "./unions/cta.js";
import { mediaImageurlSchema, type MediaImageurl } from "./unions/media-imageurl.js";
import { mediaMaxheightSchema, type MediaMaxheight } from "./unions/media-maxheight.js";
import {
  mediaOriginalimageheightSchema,
  type MediaOriginalimageheight,
} from "./unions/media-originalimageheight.js";
import {
  mediaOriginalimagewidthSchema,
  type MediaOriginalimagewidth,
} from "./unions/media-originalimagewidth.js";

/** Supported mappings from one result item to the existing card shape. */
export type DisplayCardMapping = {
  mediaImageUrl?: MediaImageurl;
  mediaOriginalImageWidth?: MediaOriginalimagewidth;
  mediaOriginalImageHeight?: MediaOriginalimageheight;
  mediaMaxHeight?: MediaMaxheight;
  contentHeader?: ContentHeader;
  contentSubheader?: ContentSubheader;
  contentDescription?: ContentDescription;
  contentAvatarImageUrl?: ContentAvatarimageurl;
  contentContentAlwaysLeft?: ContentContentalwaysleft;
  actions?: DisplayActionMapping[];
  cta?: Cta;
  /** Localized phrase metadata keyed by output card field path. */
  i18N?: Record<string, DisplayPhraseMapping>;
};

export const displayCardMappingSchema: Schema<DisplayCardMapping> = s.object<DisplayCardMapping>({
  mediaImageUrl: s.optional(s.lazy(() => mediaImageurlSchema)),
  mediaOriginalImageWidth: s.optional(s.lazy(() => mediaOriginalimagewidthSchema)),
  mediaOriginalImageHeight: s.optional(s.lazy(() => mediaOriginalimageheightSchema)),
  mediaMaxHeight: s.optional(s.lazy(() => mediaMaxheightSchema)),
  contentHeader: s.optional(s.lazy(() => contentHeaderSchema)),
  contentSubheader: s.optional(s.lazy(() => contentSubheaderSchema)),
  contentDescription: s.optional(s.lazy(() => contentDescriptionSchema)),
  contentAvatarImageUrl: s.optional(s.lazy(() => contentAvatarimageurlSchema)),
  contentContentAlwaysLeft: s.optional(s.lazy(() => contentContentalwaysleftSchema)),
  actions: s.optional(s.array(s.lazy(() => displayActionMappingSchema))),
  cta: s.optional(s.lazy(() => ctaSchema)),
  i18N: s.optional(
    s.record(
      s.string(),
      s.lazy(() => displayPhraseMappingSchema),
    ),
  ),
  _keysMap: {
    mediaImageUrl: "media.imageUrl",
    mediaOriginalImageWidth: "media.originalImageWidth",
    mediaOriginalImageHeight: "media.originalImageHeight",
    mediaMaxHeight: "media.maxHeight",
    contentHeader: "content.header",
    contentSubheader: "content.subheader",
    contentDescription: "content.description",
    contentAvatarImageUrl: "content.avatarImageUrl",
    contentContentAlwaysLeft: "content.contentAlwaysLeft",
    i18N: "i18n",
  },
});
