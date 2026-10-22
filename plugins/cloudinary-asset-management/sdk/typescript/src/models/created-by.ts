import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about who created the asset. */
export type CreatedBy = {
  /** The access key of the user who created the asset. */
  accessKey?: string;
};

export const createdBySchema: Schema<CreatedBy> = s.object<CreatedBy>({
  accessKey: s.optional(s.string()),
  _keysMap: {
    accessKey: "access_key",
  },
});
