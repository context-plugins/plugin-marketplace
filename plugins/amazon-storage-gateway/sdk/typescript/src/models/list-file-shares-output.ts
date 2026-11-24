import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fileShareInfoSchema, type FileShareInfo } from "./file-share-info.js";

export type ListFileSharesOutput = {
  /** If the request includes Marker, the response returns that value in this field. */
  marker?: string;
  /**
   * If a value is present, there are more file shares to return. In a subsequent request, use
   * NextMarker as the value for Marker to retrieve the next set of file shares.
   */
  nextMarker?: string;
  /** An array of information about the S3 File Gateway's file shares. */
  fileShareInfoList?: FileShareInfo[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listFileSharesOutputSchema: Schema<ListFileSharesOutput> = s.object<ListFileSharesOutput>(
  {
    marker: s.optional(s.string()),
    nextMarker: s.optional(s.string()),
    fileShareInfoList: s.optional(s.array(s.lazy(() => fileShareInfoSchema))),
    _keysMap: {
      marker: "Marker",
      nextMarker: "NextMarker",
      fileShareInfoList: "FileShareInfoList",
    },
  },
  { additionalProperties: s.json() },
);
