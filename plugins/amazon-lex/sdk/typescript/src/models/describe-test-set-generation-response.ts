import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  testSetGenerationDataSourceSchema,
  type TestSetGenerationDataSource,
} from "./test-set-generation-data-source.js";
import { testSetGenerationStatusSchema, type TestSetGenerationStatus } from "./test-set-generation-status.js";
import { testSetStorageLocationSchema, type TestSetStorageLocation } from "./test-set-storage-location.js";

export type DescribeTestSetGenerationResponse = {
  /** The unique identifier of the test set generation. */
  testSetGenerationId?: string;
  /** The status for the test set generation. */
  testSetGenerationStatus?: TestSetGenerationStatus;
  /** The reasons the test set generation failed. */
  failureReasons?: string[];
  /** The unique identifier for the test set created for the generated test set. */
  testSetId?: string;
  /** The test set name for the generated test set. */
  testSetName?: string;
  /** The test set description for the test set generation. */
  description?: string;
  storageLocation?: TestSetStorageLocation;
  generationDataSource?: TestSetGenerationDataSource;
  /** The roleARN of the test set used for the test set generation. */
  roleArn?: string;
  /** The creation date and time for the test set generation. */
  creationDateTime?: Date;
  /** The date and time of the last update for the test set generation. */
  lastUpdatedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeTestSetGenerationResponseSchema: Schema<DescribeTestSetGenerationResponse> =
  s.object<DescribeTestSetGenerationResponse>(
    {
      testSetGenerationId: s.optional(s.string()),
      testSetGenerationStatus: s.optional(s.lazy(() => testSetGenerationStatusSchema)),
      failureReasons: s.optional(s.array(s.string())),
      testSetId: s.optional(s.string()),
      testSetName: s.optional(s.string()),
      description: s.optional(s.string()),
      storageLocation: s.optional(s.lazy(() => testSetStorageLocationSchema)),
      generationDataSource: s.optional(s.lazy(() => testSetGenerationDataSourceSchema)),
      roleArn: s.optional(s.string()),
      creationDateTime: s.optional(s.dateTime()),
      lastUpdatedDateTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
