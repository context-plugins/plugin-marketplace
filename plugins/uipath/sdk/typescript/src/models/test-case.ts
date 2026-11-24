import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { automationStatusSchema, type AutomationStatus } from "./automation-status.js";
import {
  statusUiPathTestManagerTestCasesApiSchema,
  type StatusUiPathTestManagerTestCasesApi,
} from "./status-ui-path-test-manager-test-cases-api.js";

/** A test case definition within a test project */
export type TestCase = {
  /** Unique identifier of the test case */
  id?: string;
  /** Display name of the test case */
  name?: string;
  /** Description of the test scenario */
  description?: string;
  /** Lifecycle status of the test case */
  status?: StatusUiPathTestManagerTestCasesApi;
  /** Whether the test case is linked to an automated robot process */
  automationStatus?: AutomationStatus;
  /** Labels applied to the test case for filtering and grouping */
  labels?: string[];
  /** ISO 8601 timestamp when the test case was created */
  createdOn?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testCaseSchema: Schema<TestCase> = s.object<TestCase>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusUiPathTestManagerTestCasesApiSchema)),
    automationStatus: s.optional(s.lazy(() => automationStatusSchema)),
    labels: s.optional(s.array(s.string())),
    createdOn: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
