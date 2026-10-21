import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response when a file is successfully uploaded to a VM */
export type FileUploadResponse = {
  /** Status of the operation */
  status: string;
  /** Human-readable status message */
  message: string;
  /** Path where the file was saved on the VM */
  filePath: string;
};

export const fileUploadResponseSchema: Schema<FileUploadResponse> = s.object<FileUploadResponse>({
  status: s.string(),
  message: s.string(),
  filePath: s.string(),
  _keysMap: {
    filePath: "file_path",
  },
});
