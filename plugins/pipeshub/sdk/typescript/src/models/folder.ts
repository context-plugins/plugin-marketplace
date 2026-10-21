import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Folder = {
  id: string;
  name: string;
  createdAtTimestamp?: number;
  path?: string;
};

export const folderSchema: Schema<Folder> = s.object<Folder>({
  id: s.string(),
  name: s.string(),
  createdAtTimestamp: s.optional(s.int()),
  path: s.optional(s.string()),
});
