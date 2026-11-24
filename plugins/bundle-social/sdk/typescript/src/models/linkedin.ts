import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { privacy1Schema, type Privacy1 } from "./privacy1.js";

export type Linkedin = {
  text: string;
  uploadIds?: string[] | null;
  /** Optional URL for LinkedIn article preview post. */
  link?: string | null;
  /** The URL to image uploaded on bundle.social. */
  thumbnail?: string | null;
  /**
   * Title for video or document posts. If not provided for videos, LinkedIn displays the posting
   * date under the video.
   */
  mediaTitle?: string | null;
  privacy?: Privacy1 | null;
  /** Set to true if the post shouldn't be displayed in the main feed. @default false */
  hideFromFeed?: boolean | null;
  /** Set to true if the post is not allowed to be reshared. @default false */
  disableReshare?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linkedinSchema: Schema<Linkedin> = s.object<Linkedin>(
  {
    text: s.string(),
    uploadIds: s.optionalNullable(s.array(s.string())),
    link: s.optionalNullable(s.string()),
    thumbnail: s.optionalNullable(s.string()),
    mediaTitle: s.optionalNullable(s.string()),
    privacy: s.optionalNullable(s.lazy(() => privacy1Schema)),
    hideFromFeed: s.defaulted(s.nullable(s.boolean()), false),
    disableReshare: s.defaulted(s.nullable(s.boolean()), false),
  },
  { additionalProperties: s.json() },
);
