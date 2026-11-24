import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modality1Schema, type Modality1 } from "./modality1.js";
import {
  statusAmazonLexModelBuildingV2TestsetsApiSchema,
  type StatusAmazonLexModelBuildingV2TestsetsApi,
} from "./status-amazon-lex-model-building-v2-testsets-api.js";
import { testSetStorageLocationSchema, type TestSetStorageLocation } from "./test-set-storage-location.js";

export type TestSetSummary = {
  /** The unique identifier of the test set. */
  testSetId?: string;
  /** The name of the test set. */
  testSetName?: string;
  /** The description of the test set. */
  description?: string;
  /** Specifies whether the test set contains written or spoken data. */
  modality?: Modality1;
  /** The status of the test set. */
  status?: StatusAmazonLexModelBuildingV2TestsetsApi;
  /** The Amazon Resource Name (ARN) of an IAM role that has permission to access the test set. */
  roleArn?: string;
  /** The number of turns in the test set. */
  numTurns?: number;
  storageLocation?: TestSetStorageLocation;
  /** The date and time at which the test set was created. */
  creationDateTime?: Date;
  /** The date and time at which the test set was last updated. */
  lastUpdatedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testSetSummarySchema: Schema<TestSetSummary> = s.object<TestSetSummary>(
  {
    testSetId: s.optional(s.string()),
    testSetName: s.optional(s.string()),
    description: s.optional(s.string()),
    modality: s.optional(s.lazy(() => modality1Schema)),
    status: s.optional(s.lazy(() => statusAmazonLexModelBuildingV2TestsetsApiSchema)),
    roleArn: s.optional(s.string()),
    numTurns: s.optional(s.int()),
    storageLocation: s.optional(s.lazy(() => testSetStorageLocationSchema)),
    creationDateTime: s.optional(s.dateTime()),
    lastUpdatedDateTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
