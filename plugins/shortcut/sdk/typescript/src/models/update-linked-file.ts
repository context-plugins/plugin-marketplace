import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

export type UpdateLinkedFile = {
  /** The description of the file. */
  description?: string;
  /** The ID of the linked story. */
  storyId?: number;
  /** The name of the file. */
  name?: string;
  /** The URL of the thumbnail, if the integration provided it. */
  thumbnailUrl?: string;
  /** The integration type of the file (e.g. google, dropbox, box). */
  type?: Type1;
  /** The filesize, if the integration provided it. */
  size?: number;
  /** The UUID of the member that uploaded the file. */
  uploaderId?: string;
  /** The URL of linked file. */
  url?: string;
};

const updateLinkedFileProperties: s.Shape<UpdateLinkedFile> = {
  description: s.optional(s.string()),
  storyId: s.optional(s.int()),
  name: s.optional(s.string()),
  thumbnailUrl: s.optional(s.string()),
  type: s.optional(s.lazy(() => type1Schema)),
  size: s.optional(s.int()),
  uploaderId: s.optional(s.string()),
  url: s.optional(s.string()),
  _keysMap: {
    storyId: "story_id",
    thumbnailUrl: "thumbnail_url",
    uploaderId: "uploader_id",
  },
};

export const updateLinkedFileInternalSchema: Schema<UpdateLinkedFile> =
  s.object<UpdateLinkedFile>(updateLinkedFileProperties);

export const updateLinkedFileSchema: Schema<UpdateLinkedFile> = s.lazySchema(() =>
  s.object<UpdateLinkedFile>({
    ...updateLinkedFileProperties,
    description: s.optional(s.string().check(s.maxLength(512))),
    name: s.optional(s.string().check(s.minLength(1))),
    thumbnailUrl: s.optional(s.string().check(s.maxLength(2048), s.pattern("^https?://.+$"))),
    url: s.optional(s.string().check(s.maxLength(2048), s.pattern("^https?://.+$"))),
  }),
);
