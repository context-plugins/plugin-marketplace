import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modalitySchema, type Modality } from "./modality.js";
import {
  testSetImportInputLocationSchema,
  type TestSetImportInputLocation,
} from "./test-set-import-input-location.js";
import { testSetStorageLocationSchema, type TestSetStorageLocation } from "./test-set-storage-location.js";

export type TestSetImportResourceSpecification = {
  /** The name of the test set. */
  testSetName: string;
  /** The description of the test set. */
  description?: string;
  /** The Amazon Resource Name (ARN) of an IAM role that has permission to access the test set. */
  roleArn: string;
  storageLocation: TestSetStorageLocation;
  importInputLocation: TestSetImportInputLocation;
  /** Specifies whether the test-set being imported contains written or spoken data. */
  modality: Modality;
  /**
   * A list of tags to add to the test set. You can only add tags when you import/generate a new
   * test set. You can't use the UpdateTestSet operation to update tags. To update tags, use the
   * TagResource operation.
   */
  testSetTags?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testSetImportResourceSpecificationSchema: Schema<TestSetImportResourceSpecification> =
  s.object<TestSetImportResourceSpecification>(
    {
      testSetName: s.string(),
      description: s.optional(s.string()),
      roleArn: s.string(),
      storageLocation: testSetStorageLocationSchema,
      importInputLocation: testSetImportInputLocationSchema,
      modality: modalitySchema,
      testSetTags: s.optional(s.record(s.string(), s.string())),
    },
    { additionalProperties: s.json() },
  );
