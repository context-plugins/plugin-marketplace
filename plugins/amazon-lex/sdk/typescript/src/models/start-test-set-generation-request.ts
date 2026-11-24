import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  testSetGenerationDataSourceSchema,
  type TestSetGenerationDataSource,
} from "./test-set-generation-data-source.js";
import { testSetStorageLocationSchema, type TestSetStorageLocation } from "./test-set-storage-location.js";

export type StartTestSetGenerationRequest = {
  /** The test set name for the test set generation request. */
  testSetName: string;
  /** The test set description for the test set generation request. */
  description?: string;
  storageLocation: TestSetStorageLocation;
  generationDataSource: TestSetGenerationDataSource;
  /**
   * The roleARN used for any operation in the test set to access resources in the Amazon Web
   * Services account.
   */
  roleArn: string;
  /**
   * A list of tags to add to the test set. You can only add tags when you import/generate a new
   * test set. You can't use the UpdateTestSet operation to update tags. To update tags, use the
   * TagResource operation.
   */
  testSetTags?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startTestSetGenerationRequestSchema: Schema<StartTestSetGenerationRequest> =
  s.object<StartTestSetGenerationRequest>(
    {
      testSetName: s.string(),
      description: s.optional(s.string()),
      storageLocation: testSetStorageLocationSchema,
      generationDataSource: testSetGenerationDataSourceSchema,
      roleArn: s.string(),
      testSetTags: s.optional(s.record(s.string(), s.string())),
    },
    { additionalProperties: s.json() },
  );
