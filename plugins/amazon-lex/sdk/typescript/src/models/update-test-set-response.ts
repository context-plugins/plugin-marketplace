import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modality2Schema, type Modality2 } from "./modality2.js";
import { status2Schema, type Status2 } from "./status2.js";
import { testSetStorageLocationSchema, type TestSetStorageLocation } from "./test-set-storage-location.js";

export type UpdateTestSetResponse = {
  /** The test set Id for which update test operation to be performed. */
  testSetId?: string;
  /** The test set name for the updated test set. */
  testSetName?: string;
  /** The test set description for the updated test set. */
  description?: string;
  /** Indicates whether audio or text is used for the updated test set. */
  modality?: Modality2;
  /** The status for the updated test set. */
  status?: Status2;
  /**
   * The roleARN used for any operation in the test set to access resources in the Amazon Web
   * Services account.
   */
  roleArn?: string;
  /** The number of conversation turns from the updated test set. */
  numTurns?: number;
  storageLocation?: TestSetStorageLocation;
  /** The creation date and time for the updated test set. */
  creationDateTime?: Date;
  /** The date and time of the last update for the updated test set. */
  lastUpdatedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateTestSetResponseSchema: Schema<UpdateTestSetResponse> = s.object<UpdateTestSetResponse>(
  {
    testSetId: s.optional(s.string()),
    testSetName: s.optional(s.string()),
    description: s.optional(s.string()),
    modality: s.optional(s.lazy(() => modality2Schema)),
    status: s.optional(s.lazy(() => status2Schema)),
    roleArn: s.optional(s.string()),
    numTurns: s.optional(s.int()),
    storageLocation: s.optional(s.lazy(() => testSetStorageLocationSchema)),
    creationDateTime: s.optional(s.dateTime()),
    lastUpdatedDateTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
