import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Folder = {
  /** The name of the folder. */
  name: string;
  /** The full path of the folder. */
  path: string;
  /** The unique identifier for the folder. */
  externalId: string;
  /** The timestamp when the folder was created. */
  createdAt?: Date;
};

export const folderSchema: Schema<Folder> = s.object<Folder>({
  name: s.string(),
  path: s.string(),
  externalId: s.string(),
  createdAt: s.optional(s.dateTime()),
  _keysMap: {
    externalId: "external_id",
    createdAt: "created_at",
  },
});
