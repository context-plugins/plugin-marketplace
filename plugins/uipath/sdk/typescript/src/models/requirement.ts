import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusUiPathTestManagerRequirementsApiSchema,
  type StatusUiPathTestManagerRequirementsApi,
} from "./status-ui-path-test-manager-requirements-api.js";

/** A business or technical requirement for traceability coverage */
export type Requirement = {
  /** Unique identifier of the requirement */
  id?: string;
  /** Display name of the requirement */
  name?: string;
  /** Detailed description of the requirement specification */
  description?: string;
  /** Optional external identifier linking to a third-party requirements tool */
  externalId?: string;
  /** Lifecycle status of the requirement */
  status?: StatusUiPathTestManagerRequirementsApi;
  /** Number of test cases currently linked to this requirement */
  linkedTestCaseCount?: number;
  /** ISO 8601 timestamp when the requirement was created */
  createdOn?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requirementSchema: Schema<Requirement> = s.object<Requirement>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    externalId: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusUiPathTestManagerRequirementsApiSchema)),
    linkedTestCaseCount: s.optional(s.int()),
    createdOn: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
