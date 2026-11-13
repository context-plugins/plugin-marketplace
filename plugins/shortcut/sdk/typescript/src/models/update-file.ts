import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateFile = {
  /** The description of the file. */
  description?: string;
  /** The time/date that the file was uploaded. */
  createdAt?: Date;
  /** The time/date that the file was last updated. */
  updatedAt?: Date;
  /** The name of the file. */
  name?: string;
  /** The unique ID assigned to the Member who uploaded the file to Shortcut. */
  uploaderId?: string;
  /** An additional ID that you may wish to assign to the file. */
  externalId?: string;
};

const updateFileProperties: s.Shape<UpdateFile> = {
  description: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  name: s.optional(s.string()),
  uploaderId: s.optional(s.string()),
  externalId: s.optional(s.string()),
  _keysMap: {
    createdAt: "created_at",
    updatedAt: "updated_at",
    uploaderId: "uploader_id",
    externalId: "external_id",
  },
};

export const updateFileInternalSchema: Schema<UpdateFile> = s.object<UpdateFile>(updateFileProperties);

export const updateFileSchema: Schema<UpdateFile> = s.lazySchema(() =>
  s.object<UpdateFile>({
    ...updateFileProperties,
    description: s.optional(s.string().check(s.maxLength(4096))),
    name: s.optional(s.string().check(s.minLength(1), s.maxLength(1024))),
    externalId: s.optional(s.string().check(s.maxLength(2048))),
  }),
);
