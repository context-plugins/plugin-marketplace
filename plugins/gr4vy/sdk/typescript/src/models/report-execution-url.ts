import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReportExecutionUrl = {
  /** A signed URL to download the report execution file. */
  url: string;
  /** The date and time when the download URL expires. */
  expiresAt: Date;
};

export const reportExecutionUrlSchema: Schema<ReportExecutionUrl> = s.object<ReportExecutionUrl>({
  url: s.string(),
  expiresAt: s.dateTime(),
  _keysMap: {
    expiresAt: "expires_at",
  },
});
