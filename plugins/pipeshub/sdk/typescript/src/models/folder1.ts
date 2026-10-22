import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Folder1 = {
  /** Folder ID */
  id: string;
  /** Folder name */
  name: string;
  /** Creation timestamp in milliseconds */
  createdAtTimestamp?: number;
};

export const folder1Schema: Schema<Folder1> = s.object<Folder1>({
  id: s.string(),
  name: s.string(),
  createdAtTimestamp: s.optional(s.int()),
});
