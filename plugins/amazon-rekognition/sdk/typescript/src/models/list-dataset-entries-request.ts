import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListDatasetEntriesRequest = {
  /** The Amazon Resource Name (ARN) for the dataset that you want to use. */
  datasetArn: string;
  /**
   * Specifies a label filter for the response. The response includes an entry only if one or more
   * of the labels in ContainsLabels exist in the entry.
   */
  containsLabels?: string[];
  /**
   * Specify true to get only the JSON Lines where the image is labeled. Specify false to get only
   * the JSON Lines where the image isn't labeled. If you don't specify Labeled, ListDatasetEntries
   * returns JSON Lines for labeled and unlabeled images.
   */
  labeled?: boolean;
  /**
   * If specified, ListDatasetEntries only returns JSON Lines where the value of SourceRefContains
   * is part of the source-ref field. The source-ref field contains the Amazon S3 location of the
   * image. You can use SouceRefContains for tasks such as getting the JSON Line for a single image,
   * or gettting JSON Lines for all images within a specific folder.
   */
  sourceRefContains?: string;
  /**
   * Specifies an error filter for the response. Specify True to only include entries that have
   * errors.
   */
  hasErrors?: boolean;
  /**
   * If the previous response was incomplete (because there is more results to retrieve), Amazon
   * Rekognition Custom Labels returns a pagination token in the response. You can use this
   * pagination token to retrieve the next set of results.
   */
  nextToken?: string;
  /**
   * The maximum number of results to return per paginated call. The largest value you can specify
   * is 100. If you specify a value greater than 100, a ValidationException error occurs. The
   * default value is 100.
   */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listDatasetEntriesRequestSchema: Schema<ListDatasetEntriesRequest> =
  s.object<ListDatasetEntriesRequest>(
    {
      datasetArn: s.string(),
      containsLabels: s.optional(s.array(s.string())),
      labeled: s.optional(s.boolean()),
      sourceRefContains: s.optional(s.string()),
      hasErrors: s.optional(s.boolean()),
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      _keysMap: {
        datasetArn: "DatasetArn",
        containsLabels: "ContainsLabels",
        labeled: "Labeled",
        sourceRefContains: "SourceRefContains",
        hasErrors: "HasErrors",
        nextToken: "NextToken",
        maxResults: "MaxResults",
      },
    },
    { additionalProperties: s.json() },
  );
