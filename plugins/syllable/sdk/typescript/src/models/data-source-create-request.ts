import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chunkDelimiterSchema, type ChunkDelimiter } from "./unions/chunk-delimiter.js";
import { description14Schema, type Description14 } from "./unions/description14.js";

/** Request model to create a data source. */
export type DataSourceCreateRequest = {
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
  /**
   * Information that the data source will provide to the agent accessing it. It is recommended to
   * include a sentence at the beginning providing context to the LLM for the information in the
   * data source.
   */
  text: string;
};

export const dataSourceCreateRequestSchema: Schema<DataSourceCreateRequest> =
  s.object<DataSourceCreateRequest>({
    name: s.string(),
    description: s.optional(s.lazy(() => description14Schema)),
    labels: s.optional(s.array(s.string())),
    chunk: s.boolean(),
    chunkDelimiter: s.optional(s.lazy(() => chunkDelimiterSchema)),
    text: s.string(),
    _keysMap: {
      chunkDelimiter: "chunk_delimiter",
    },
  });
