import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { carouselItemInternalSchema, carouselItemSchema, type CarouselItem } from "./carousel-item.js";
import {
  musicSoundInfoInternalSchema,
  musicSoundInfoSchema,
  type MusicSoundInfo,
} from "./music-sound-info.js";
import { taggedInternalSchema, taggedSchema, type Tagged } from "./tagged.js";
import { trialParamsSchema, type TrialParams } from "./trial-params.js";
import { Type1, type1Schema } from "./type1.js";

export type Instagram = {
  /** @default Type1.Post */
  type?: Type1;
  text?: string | null;
  uploadIds?: string[] | null;
  /** Alternative text for a single image post. */
  altText?: string | null;
  /** Choose a frame of the published video as the cover photo in ms @default 0 */
  thumbnailOffset?: number | null;
  /** The URL to image uploaded on bundle.social. */
  thumbnail?: string | null;
  /**
   * For Reels only.When true, indicates that the reel can appear in both the Feed and Reels
   * tabs.When false, indicates the reel can only appear in the Reels tab.
   *
   * @default true
   */
  shareToFeed?: boolean | null;
  collaborators?: string[] | null;
  /** @default false */
  autoFitImage?: boolean | null;
  /** @default false */
  autoCropImage?: boolean | null;
  tagged?: Tagged[] | null;
  carouselItems?: CarouselItem[] | null;
  locationId?: string | null;
  /** For Reels only. Trial reels are only shared to non-followers. */
  trialParams?: TrialParams | null;
  /** Enables the native "Paid partnership" disclosure label. @default false */
  isPaidPartnership?: boolean | null;
  /** Up to 2 Instagram usernames of the brands tagged as paid-partnership sponsors. */
  brandedContentSponsors?: string[] | null;
  /** Information about the Instagram audio asset used for Reels publishing. */
  musicSoundInfo?: MusicSoundInfo | null;
  /**
   * Set to true if the content was generated or modified by AI. Adds Instagram's AI content label.
   *
   * @default false
   */
  isAiGenerated?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const instagramProperties: s.Shape<Instagram> = {
  type: s.defaulted(type1Schema, Type1.Post),
  text: s.optionalNullable(s.string()),
  uploadIds: s.optionalNullable(s.array(s.string())),
  altText: s.optionalNullable(s.string()),
  thumbnailOffset: s.defaulted(s.nullable(s.float64()), 0),
  thumbnail: s.optionalNullable(s.string()),
  shareToFeed: s.defaulted(s.nullable(s.boolean()), true),
  collaborators: s.optionalNullable(s.array(s.string())),
  autoFitImage: s.defaulted(s.nullable(s.boolean()), false),
  autoCropImage: s.defaulted(s.nullable(s.boolean()), false),
  tagged: s.optionalNullable(s.array(s.lazy(() => taggedInternalSchema))),
  carouselItems: s.optionalNullable(s.array(s.lazy(() => carouselItemInternalSchema))),
  locationId: s.optionalNullable(s.string()),
  trialParams: s.optionalNullable(s.lazy(() => trialParamsSchema)),
  isPaidPartnership: s.defaulted(s.nullable(s.boolean()), false),
  brandedContentSponsors: s.optionalNullable(s.array(s.string())),
  musicSoundInfo: s.optionalNullable(s.lazy(() => musicSoundInfoInternalSchema)),
  isAiGenerated: s.defaulted(s.nullable(s.boolean()), false),
};

export const instagramInternalSchema: Schema<Instagram> = s.object<Instagram>(instagramProperties, {
  additionalProperties: s.json(),
});

export const instagramSchema: Schema<Instagram> = s.lazySchema(() =>
  s.object<Instagram>(
    {
      ...instagramProperties,
      tagged: s.optionalNullable(s.array(s.lazy(() => taggedSchema))),
      carouselItems: s.optionalNullable(s.array(s.lazy(() => carouselItemSchema))),
      brandedContentSponsors: s.optionalNullable(
        s.array(s.string().check(s.minLength(1), s.maxLength(30))).check(s.maxLength(2)),
      ),
      musicSoundInfo: s.optionalNullable(s.lazy(() => musicSoundInfoSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
