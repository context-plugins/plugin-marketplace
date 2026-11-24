import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  musicSoundInfo1InternalSchema,
  musicSoundInfo1Schema,
  type MusicSoundInfo1,
} from "./music-sound-info1.js";
import { privacySchema, type Privacy } from "./privacy.js";
import { Type3, type3Schema } from "./type3.js";

export type Tiktok = {
  /** @default Type3.Video */
  type?: Type3;
  text?: string | null;
  uploadIds?: string[] | null;
  /** The URL to image uploaded on bundle.social. */
  thumbnail?: string | null;
  privacy?: Privacy | null;
  /** @default 0 */
  photoCoverIndex?: number | null;
  /**
   * Set to true if the video is a paid partnership to promote a third-party business.
   *
   * @default false
   */
  isBrandContent?: boolean | null;
  /** Set to true if this video is promoting the creator's own business. @default false */
  isOrganicBrandContent?: boolean | null;
  /**
   * If set to true, other TikTok users will not be allowed to make comments on this post.
   *
   * @default false
   */
  disableComments?: boolean | null;
  /**
   * If set to true, other TikTok users will not be allowed to make Stitches using this post.
   *
   * @default false
   */
  disableDuet?: boolean | null;
  /**
   * If set to true, other TikTok users will not be allowed to make Duets using this post.
   *
   * @default false
   */
  disableStitch?: boolean | null;
  /** Choose a frame of the published video as the cover photo in ms @default 0 */
  thumbnailOffset?: number | null;
  /** Set to true if this video is AI generated. @default false */
  isAiGenerated?: boolean | null;
  /** If set to true, TikTok will automatically add music to the photos. @default false */
  autoAddMusic?: boolean | null;
  /** @default false */
  autoScale?: boolean | null;
  /** If set to true, upload post as draft. @default false */
  uploadToDraft?: boolean | null;
  /** Information about the commercial sound (track) used for TikTok publishing. */
  musicSoundInfo?: MusicSoundInfo1 | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tiktokProperties: s.Shape<Tiktok> = {
  type: s.defaulted(type3Schema, Type3.Video),
  text: s.optionalNullable(s.string()),
  uploadIds: s.optionalNullable(s.array(s.string())),
  thumbnail: s.optionalNullable(s.string()),
  privacy: s.optionalNullable(s.lazy(() => privacySchema)),
  photoCoverIndex: s.defaulted(s.nullable(s.int()), 0),
  isBrandContent: s.defaulted(s.nullable(s.boolean()), false),
  isOrganicBrandContent: s.defaulted(s.nullable(s.boolean()), false),
  disableComments: s.defaulted(s.nullable(s.boolean()), false),
  disableDuet: s.defaulted(s.nullable(s.boolean()), false),
  disableStitch: s.defaulted(s.nullable(s.boolean()), false),
  thumbnailOffset: s.defaulted(s.nullable(s.float64()), 0),
  isAiGenerated: s.defaulted(s.nullable(s.boolean()), false),
  autoAddMusic: s.defaulted(s.nullable(s.boolean()), false),
  autoScale: s.defaulted(s.nullable(s.boolean()), false),
  uploadToDraft: s.defaulted(s.nullable(s.boolean()), false),
  musicSoundInfo: s.optionalNullable(s.lazy(() => musicSoundInfo1InternalSchema)),
};

export const tiktokInternalSchema: Schema<Tiktok> = s.object<Tiktok>(tiktokProperties, {
  additionalProperties: s.json(),
});

export const tiktokSchema: Schema<Tiktok> = s.lazySchema(() =>
  s.object<Tiktok>(
    {
      ...tiktokProperties,
      photoCoverIndex: s.defaulted(s.nullable(s.int().check(s.gte(0))), 0),
      musicSoundInfo: s.optionalNullable(s.lazy(() => musicSoundInfo1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
