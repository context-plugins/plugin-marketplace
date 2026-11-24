import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateTestSetRequest = {
  /** The test set Id for which update test operation to be performed. */
  testSetId: string;
  /** The new test set name. */
  testSetName: string;
  /** The new test set description. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateTestSetRequestSchema: Schema<UpdateTestSetRequest> = s.object<UpdateTestSetRequest>(
  {
    testSetId: s.string(),
    testSetName: s.string(),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
