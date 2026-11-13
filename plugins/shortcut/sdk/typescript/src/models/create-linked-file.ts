import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

export type CreateLinkedFile = {
  /** The description of the file. */
  description?: string;
  /** The ID of the linked story. */
  storyId?: number;
  /** The name of the file. */
  name: string;
  /** The URL of the thumbnail, if the integration provided it. */
  thumbnailUrl?: string;
  /** The integration type of the file (e.g. google, dropbox, box). */
  type: Type1;
  /** The filesize, if the integration provided it. */
  size?: number;
  /** The UUID of the member that uploaded the file. */
  uploaderId?: string;
  /** The content type of the image (e.g. txt/plain). */
  contentType?: string;
  /** The URL of linked file. */
  url: string;
};

const createLinkedFileProperties: s.Shape<CreateLinkedFile> = {
  description: s.optional(s.string()),
  storyId: s.optional(s.int()),
  name: s.string(),
  thumbnailUrl: s.optional(s.string()),
  type: type1Schema,
  size: s.optional(s.int()),
  uploaderId: s.optional(s.string()),
  contentType: s.optional(s.string()),
  url: s.string(),
  _keysMap: {
    storyId: "story_id",
    thumbnailUrl: "thumbnail_url",
    uploaderId: "uploader_id",
    contentType: "content_type",
  },
};

export const createLinkedFileInternalSchema: Schema<CreateLinkedFile> =
  s.object<CreateLinkedFile>(createLinkedFileProperties);

export const createLinkedFileSchema: Schema<CreateLinkedFile> = s.lazySchema(() =>
  s.object<CreateLinkedFile>({
    ...createLinkedFileProperties,
    description: s.optional(s.string().check(s.maxLength(512))),
    name: s.string().check(s.minLength(1), s.maxLength(256)),
    thumbnailUrl: s.optional(s.string().check(s.maxLength(2048), s.pattern("^https?://.+$"))),
    contentType: s.optional(s.string().check(s.maxLength(128))),
    url: s.string().check(s.maxLength(2048), s.pattern("^https?://.+$")),
  }),
);
