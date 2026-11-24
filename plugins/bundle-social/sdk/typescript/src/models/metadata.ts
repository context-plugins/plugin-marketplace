import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Metadata = {
  allowImages?: boolean | null;
  allowVideos?: boolean | null;
  allowGalleries?: boolean | null;
  linkFlairEnabled?: boolean | null;
  facebookPageId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metadataSchema: Schema<Metadata> = s.object<Metadata>(
  {
    allowImages: s.optionalNullable(s.boolean()),
    allowVideos: s.optionalNullable(s.boolean()),
    allowGalleries: s.optionalNullable(s.boolean()),
    linkFlairEnabled: s.optionalNullable(s.boolean()),
    facebookPageId: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
