import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteTestSetRequest = {
  /** The test set Id of the test set to be deleted. */
  testSetId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteTestSetRequestSchema: Schema<DeleteTestSetRequest> = s.object<DeleteTestSetRequest>(
  {
    testSetId: s.string(),
  },
  { additionalProperties: s.json() },
);
