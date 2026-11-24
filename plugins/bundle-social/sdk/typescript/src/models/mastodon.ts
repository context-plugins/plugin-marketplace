import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { privacy3Schema, type Privacy3 } from "./privacy3.js";

export type Mastodon = {
  text?: string | null;
  uploadIds?: string[] | null;
  /** The URL to image uploaded on bundle.social. */
  thumbnail?: string | null;
  privacy?: Privacy3 | null;
  spoiler?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mastodonSchema: Schema<Mastodon> = s.object<Mastodon>(
  {
    text: s.optionalNullable(s.string()),
    uploadIds: s.optionalNullable(s.array(s.string())),
    thumbnail: s.optionalNullable(s.string()),
    privacy: s.optionalNullable(s.lazy(() => privacy3Schema)),
    spoiler: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
