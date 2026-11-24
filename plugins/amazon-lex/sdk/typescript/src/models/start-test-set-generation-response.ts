import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  testSetGenerationDataSourceSchema,
  type TestSetGenerationDataSource,
} from "./test-set-generation-data-source.js";
import { testSetGenerationStatusSchema, type TestSetGenerationStatus } from "./test-set-generation-status.js";
import { testSetStorageLocationSchema, type TestSetStorageLocation } from "./test-set-storage-location.js";

export type StartTestSetGenerationResponse = {
  /** The unique identifier of the test set generation to describe. */
  testSetGenerationId?: string;
  /** The creation date and time for the test set generation. */
  creationDateTime?: Date;
  /** The status for the test set generation. */
  testSetGenerationStatus?: TestSetGenerationStatus;
  /** The test set name used for the test set generation. */
  testSetName?: string;
  /** The description used for the test set generation. */
  description?: string;
  storageLocation?: TestSetStorageLocation;
  generationDataSource?: TestSetGenerationDataSource;
  /**
   * The roleARN used for any operation in the test set to access resources in the Amazon Web
   * Services account.
   */
  roleArn?: string;
  /** A list of tags that was used for the test set that is being generated. */
  testSetTags?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startTestSetGenerationResponseSchema: Schema<StartTestSetGenerationResponse> =
  s.object<StartTestSetGenerationResponse>(
    {
      testSetGenerationId: s.optional(s.string()),
      creationDateTime: s.optional(s.dateTime()),
      testSetGenerationStatus: s.optional(s.lazy(() => testSetGenerationStatusSchema)),
      testSetName: s.optional(s.string()),
      description: s.optional(s.string()),
      storageLocation: s.optional(s.lazy(() => testSetStorageLocationSchema)),
      generationDataSource: s.optional(s.lazy(() => testSetGenerationDataSourceSchema)),
      roleArn: s.optional(s.string()),
      testSetTags: s.optional(s.record(s.string(), s.string())),
    },
    { additionalProperties: s.json() },
  );
