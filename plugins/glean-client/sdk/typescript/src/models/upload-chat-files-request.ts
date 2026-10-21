import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UploadChatFilesRequest = {
  /** Raw file to be uploaded for chat in binary format. */
  files: Uint8Array;
};

export const uploadChatFilesRequestSchema: Schema<UploadChatFilesRequest> = s.object<UploadChatFilesRequest>({
  files: s.bytes(),
});
