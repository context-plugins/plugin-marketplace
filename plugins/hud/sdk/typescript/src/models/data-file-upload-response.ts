import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataFileResponseSchema, type DataFileResponse } from "./data-file-response.js";

/** A reserved data file and the presigned PUT that fills it. */
export type DataFileUploadResponse = {
  /** Size is reserved up front and verified against the stored object on completion. */
  file: DataFileResponse;
  uploadUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataFileUploadResponseSchema: Schema<DataFileUploadResponse> = s.object<DataFileUploadResponse>(
  {
    file: dataFileResponseSchema,
    uploadUrl: s.string(),
    _keysMap: {
      uploadUrl: "upload_url",
    },
  },
  { additionalProperties: s.json() },
);
