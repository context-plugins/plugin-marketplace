import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chunkDelimiterSchema, type ChunkDelimiter } from "./unions/chunk-delimiter.js";
import { description14Schema, type Description14 } from "./unions/description14.js";
import { editComments4Schema, type EditComments4 } from "./unions/edit-comments4.js";
import { lastUpdatedBy2Schema, type LastUpdatedBy2 } from "./unions/last-updated-by2.js";

/**
 * Metadata about a data source, not including the text. A data source is a blob of text that can be
 * made available to an agent's general info tools to provide more context to the agent when
 * generating its responses. For more information, see [Console
 * docs](https://docs.syllable.ai/Resources/DataSources).
 */
export type DataSourceMetadataResponse = {
  /** The data source name. Must be unique within suborg. Cannot contain whitespace. */
  name: string;
  /** The description of the data source. */
  description?: Description14;
  /**
   * Searchable labels for the data source. Can be included in agent.prompt_tool_defaults for a
   * given tool to give the agent access to data sources with those labels when calling that tool.
   */
  labels?: string[];
  /**
   * Whether the content should be split into smaller chunks. (This feature is coming in the future
   * - currently this value will always be treated as False.)
   */
  chunk: boolean;
  /**
   * String that should be treated as delimiter between intended chunks. (This feature is coming in
   * the future - currently this value will always be treated as None.)
   */
  chunkDelimiter?: ChunkDelimiter;
  /** The data source ID. */
  id: number;
  /** The comments for the most recent edit to the data source */
  editComments?: EditComments4;
  /** Timestamp of most recent update */
  updatedAt: Date;
  /** Email of the user who last updated the data source */
  lastUpdatedBy: LastUpdatedBy2;
};

export const dataSourceMetadataResponseSchema: Schema<DataSourceMetadataResponse> =
  s.object<DataSourceMetadataResponse>({
    name: s.string(),
    description: s.optional(s.lazy(() => description14Schema)),
    labels: s.optional(s.array(s.string())),
    chunk: s.boolean(),
    chunkDelimiter: s.optional(s.lazy(() => chunkDelimiterSchema)),
    id: s.int(),
    editComments: s.optional(s.lazy(() => editComments4Schema)),
    updatedAt: s.dateTime(),
    lastUpdatedBy: lastUpdatedBy2Schema,
    _keysMap: {
      chunkDelimiter: "chunk_delimiter",
      editComments: "edit_comments",
      updatedAt: "updated_at",
      lastUpdatedBy: "last_updated_by",
    },
  });
