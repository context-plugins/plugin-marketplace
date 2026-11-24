import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { xPostMediaItemSchema, type XPostMediaItem } from "./xpost-media-item.js";

export type XPostMedia = {
  photo?: XPostMediaItem[] | null;
  video?: XPostMediaItem[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const xPostMediaSchema: Schema<XPostMedia> = s.object<XPostMedia>(
  {
    photo: s.optionalNullable(s.array(s.lazy(() => xPostMediaItemSchema))),
    video: s.optionalNullable(s.array(s.lazy(() => xPostMediaItemSchema))),
  },
  { additionalProperties: s.json() },
);
