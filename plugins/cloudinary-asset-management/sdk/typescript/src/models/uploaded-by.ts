import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about who uploaded the asset. */
export type UploadedBy = {
  /** The access key of the user who uploaded the asset. */
  accessKey?: string;
};

export const uploadedBySchema: Schema<UploadedBy> = s.object<UploadedBy>({
  accessKey: s.optional(s.string()),
  _keysMap: {
    accessKey: "access_key",
  },
});
