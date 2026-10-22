import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BodyInsightsFolderUploadFile = {
  file?: Uint8Array;
};

export const bodyInsightsFolderUploadFileSchema: Schema<BodyInsightsFolderUploadFile> =
  s.object<BodyInsightsFolderUploadFile>({
    file: s.optional(s.bytes()),
  });
