import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Short-lived links to a ready file: ``url`` renders in place, ``download_url`` saves. */
export type DataFileDownloadResponse = {
  url: string;
  downloadUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataFileDownloadResponseSchema: Schema<DataFileDownloadResponse> =
  s.object<DataFileDownloadResponse>(
    {
      url: s.string(),
      downloadUrl: s.string(),
      _keysMap: {
        downloadUrl: "download_url",
      },
    },
    { additionalProperties: s.json() },
  );
