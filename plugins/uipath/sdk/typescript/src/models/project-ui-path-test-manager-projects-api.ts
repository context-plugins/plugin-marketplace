import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A test project container in Test Manager */
export type ProjectUiPathTestManagerProjectsApi = {
  /** Unique identifier of the test project */
  id?: string;
  /** Display name of the test project */
  name?: string;
  /** Optional description of the project's testing scope */
  description?: string;
  /** Name of the user who created the project */
  createdBy?: string;
  /** ISO 8601 timestamp when the project was created */
  createdOn?: Date;
  /** Total number of test cases in the project */
  testCaseCount?: number;
  /** Total number of requirements in the project */
  requirementCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectUiPathTestManagerProjectsApiSchema: Schema<ProjectUiPathTestManagerProjectsApi> =
  s.object<ProjectUiPathTestManagerProjectsApi>(
    {
      id: s.optional(s.string()),
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      createdBy: s.optional(s.string()),
      createdOn: s.optional(s.dateTime()),
      testCaseCount: s.optional(s.int()),
      requirementCount: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
