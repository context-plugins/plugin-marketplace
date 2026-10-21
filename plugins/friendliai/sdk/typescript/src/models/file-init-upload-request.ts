import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Initiate file upload request. */
export type FileInitUploadRequest = {
  /** Name of the file. */
  name: string;
  /** Size of the file in bytes. */
  size: number;
  /** Digest of the file. */
  digest: string;
  /** ID of the project the file belongs to. */
  projectId: string;
};

export const fileInitUploadRequestSchema: Schema<FileInitUploadRequest> = s.object<FileInitUploadRequest>({
  name: s.string(),
  size: s.int(),
  digest: s.string(),
  projectId: s.string(),
});
