import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Version info. */
export type VersionInfo = {
  /** ID of the version. */
  id: string;
  /** Comment for the version. */
  comment: string;
  /** Unix timestamp (in seconds) of when the version was created. */
  createdAt: number;
};

export const versionInfoSchema: Schema<VersionInfo> = s.object<VersionInfo>({
  id: s.string(),
  comment: s.string(),
  createdAt: s.int(),
});
