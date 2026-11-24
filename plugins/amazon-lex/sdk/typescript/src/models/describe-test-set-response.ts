import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  modalityAmazonLexModelBuildingV2TestsetsApiSchema,
  type ModalityAmazonLexModelBuildingV2TestsetsApi,
} from "./modality-amazon-lex-model-building-v2-testsets-api.js";
import {
  statusAmazonLexModelBuildingV2TestsetsApiSchema,
  type StatusAmazonLexModelBuildingV2TestsetsApi,
} from "./status-amazon-lex-model-building-v2-testsets-api.js";
import { testSetStorageLocationSchema, type TestSetStorageLocation } from "./test-set-storage-location.js";

export type DescribeTestSetResponse = {
  /** The test set Id for the test set response. */
  testSetId?: string;
  /** The test set name of the test set. */
  testSetName?: string;
  /** The description of the test set. */
  description?: string;
  /** Indicates whether the test set is audio or text data. */
  modality?: ModalityAmazonLexModelBuildingV2TestsetsApi;
  /** The status of the test set. */
  status?: StatusAmazonLexModelBuildingV2TestsetsApi;
  /**
   * The roleARN used for any operation in the test set to access resources in the Amazon Web
   * Services account.
   */
  roleArn?: string;
  /** The total number of agent and user turn in the test set. */
  numTurns?: number;
  storageLocation?: TestSetStorageLocation;
  /** The creation date and time for the test set data. */
  creationDateTime?: Date;
  /** The date and time for the last update of the test set data. */
  lastUpdatedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeTestSetResponseSchema: Schema<DescribeTestSetResponse> =
  s.object<DescribeTestSetResponse>(
    {
      testSetId: s.optional(s.string()),
      testSetName: s.optional(s.string()),
      description: s.optional(s.string()),
      modality: s.optional(s.lazy(() => modalityAmazonLexModelBuildingV2TestsetsApiSchema)),
      status: s.optional(s.lazy(() => statusAmazonLexModelBuildingV2TestsetsApiSchema)),
      roleArn: s.optional(s.string()),
      numTurns: s.optional(s.int()),
      storageLocation: s.optional(s.lazy(() => testSetStorageLocationSchema)),
      creationDateTime: s.optional(s.dateTime()),
      lastUpdatedDateTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
