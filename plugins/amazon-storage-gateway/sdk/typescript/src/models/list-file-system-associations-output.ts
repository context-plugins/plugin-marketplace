import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  fileSystemAssociationSummarySchema,
  type FileSystemAssociationSummary,
} from "./file-system-association-summary.js";

export type ListFileSystemAssociationsOutput = {
  /** If the request includes Marker, the response returns that value in this field. */
  marker?: string;
  /**
   * If a value is present, there are more file system associations to return. In a subsequent
   * request, use NextMarker as the value for Marker to retrieve the next set of file system
   * associations.
   */
  nextMarker?: string;
  /** An array of information about the Amazon FSx gateway's file system associations. */
  fileSystemAssociationSummaryList?: FileSystemAssociationSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listFileSystemAssociationsOutputSchema: Schema<ListFileSystemAssociationsOutput> =
  s.object<ListFileSystemAssociationsOutput>(
    {
      marker: s.optional(s.string()),
      nextMarker: s.optional(s.string()),
      fileSystemAssociationSummaryList: s.optional(s.array(s.lazy(() => fileSystemAssociationSummarySchema))),
      _keysMap: {
        marker: "Marker",
        nextMarker: "NextMarker",
        fileSystemAssociationSummaryList: "FileSystemAssociationSummaryList",
      },
    },
    { additionalProperties: s.json() },
  );
