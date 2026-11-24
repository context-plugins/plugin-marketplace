import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request payload for creating a new test case */
export type CreateTestCaseRequest = {
  /** Display name for the new test case */
  name: string;
  /** Description of the test scenario */
  description?: string;
  /** Labels to apply to the test case */
  labels?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createTestCaseRequestProperties: s.Shape<CreateTestCaseRequest> = {
  name: s.string(),
  description: s.optional(s.string()),
  labels: s.optional(s.array(s.string())),
};

export const createTestCaseRequestInternalSchema: Schema<CreateTestCaseRequest> =
  s.object<CreateTestCaseRequest>(createTestCaseRequestProperties, { additionalProperties: s.json() });

export const createTestCaseRequestSchema: Schema<CreateTestCaseRequest> = s.lazySchema(() =>
  s.object<CreateTestCaseRequest>(
    {
      ...createTestCaseRequestProperties,
      name: s.string().check(s.maxLength(512)),
    },
    { additionalProperties: s.json() },
  ),
);
