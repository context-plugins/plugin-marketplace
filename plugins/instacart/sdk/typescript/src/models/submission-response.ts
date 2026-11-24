import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error1Schema, type Error1 } from "./error1.js";
import {
  statusInstacartCatalogItemsApiSchema,
  type StatusInstacartCatalogItemsApi,
} from "./status-instacart-catalog-items-api.js";

export type SubmissionResponse = {
  /** A unique identifier for tracking the submission. */
  submissionId?: string;
  /** The current status of the submission. */
  status?: StatusInstacartCatalogItemsApi;
  /** The number of records submitted. */
  submittedCount?: number;
  /** Any validation errors found in the submitted data. */
  errors?: Error1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const submissionResponseSchema: Schema<SubmissionResponse> = s.object<SubmissionResponse>(
  {
    submissionId: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusInstacartCatalogItemsApiSchema)),
    submittedCount: s.optional(s.int()),
    errors: s.optional(s.array(s.lazy(() => error1Schema))),
    _keysMap: {
      submissionId: "submission_id",
      submittedCount: "submitted_count",
    },
  },
  { additionalProperties: s.json() },
);
