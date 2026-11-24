import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { privacy2Schema, type Privacy2 } from "./privacy2.js";
import { Type5BundleSocialPostApi, type5BundleSocialPostApiSchema } from "./type5-bundle-social-post-api.js";

export type YoutubeBundleSocialPostApi = {
  /** @default Type5BundleSocialPostApi.Short */
  type?: Type5BundleSocialPostApi;
  uploadIds?: string[] | null;
  text?: string | null;
  description?: string | null;
  /** The URL to image uploaded on bundle.social. */
  thumbnail?: string | null;
  privacy?: Privacy2 | null;
  /** BCP-47 language code for the video's title and description, e.g. "en" or "pl". */
  defaultLanguage?: string | null;
  /** BCP-47 language code for the video's default audio track, e.g. "en" or "pl". */
  defaultAudioLanguage?: string | null;
  /** Set to true if the video is made for kids. @default false */
  madeForKids?: boolean | null;
  /** Set to true if video contains AI generated content @default false */
  containsSyntheticMedia?: boolean | null;
  /** Set to true if video has paid product placement @default false */
  hasPaidProductPlacement?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const youtubeBundleSocialPostApiProperties: s.Shape<YoutubeBundleSocialPostApi> = {
  type: s.defaulted(type5BundleSocialPostApiSchema, Type5BundleSocialPostApi.Short),
  uploadIds: s.optionalNullable(s.array(s.string())),
  text: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  thumbnail: s.optionalNullable(s.string()),
  privacy: s.optionalNullable(s.lazy(() => privacy2Schema)),
  defaultLanguage: s.optionalNullable(s.string()),
  defaultAudioLanguage: s.optionalNullable(s.string()),
  madeForKids: s.defaulted(s.nullable(s.boolean()), false),
  containsSyntheticMedia: s.defaulted(s.nullable(s.boolean()), false),
  hasPaidProductPlacement: s.defaulted(s.nullable(s.boolean()), false),
};

export const youtubeBundleSocialPostApiInternalSchema: Schema<YoutubeBundleSocialPostApi> =
  s.object<YoutubeBundleSocialPostApi>(youtubeBundleSocialPostApiProperties, {
    additionalProperties: s.json(),
  });

export const youtubeBundleSocialPostApiSchema: Schema<YoutubeBundleSocialPostApi> = s.lazySchema(() =>
  s.object<YoutubeBundleSocialPostApi>(
    {
      ...youtubeBundleSocialPostApiProperties,
      defaultLanguage: s.optionalNullable(s.string().check(s.maxLength(35))),
      defaultAudioLanguage: s.optionalNullable(s.string().check(s.maxLength(35))),
    },
    { additionalProperties: s.json() },
  ),
);
