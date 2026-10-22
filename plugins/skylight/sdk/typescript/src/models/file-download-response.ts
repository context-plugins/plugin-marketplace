import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response containing a presigned URL to download a file */
export type FileDownloadResponse = {
  /** Status of the operation */
  status: string;
  /** Human-readable status message */
  message: string;
  /** Presigned URL to download the file */
  downloadUrl: string;
};

export const fileDownloadResponseSchema: Schema<FileDownloadResponse> = s.object<FileDownloadResponse>({
  status: s.string(),
  message: s.string(),
  downloadUrl: s.string(),
  _keysMap: {
    downloadUrl: "download_url",
  },
});
