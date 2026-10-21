import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Split info. */
export type SplitInfo = {
  /** ID of the split. */
  id: string;
  /** Name of the split. */
  name: string;
  /** Unix timestamp (in seconds) of when the split was created. */
  createdAt: number;
  /** Unix timestamp (in seconds) of when the split was last modified. */
  updatedAt: number;
};

export const splitInfoSchema: Schema<SplitInfo> = s.object<SplitInfo>({
  id: s.string(),
  name: s.string(),
  createdAt: s.int(),
  updatedAt: s.int(),
});
