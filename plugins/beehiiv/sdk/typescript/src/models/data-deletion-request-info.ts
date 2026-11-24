import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataDeletionRequestSourceSchema,
  type DataDeletionRequestSource,
} from "./data-deletion-request-source.js";
import {
  dataDeletionRequestStatusSchema,
  type DataDeletionRequestStatus,
} from "./data-deletion-request-status.js";

export type DataDeletionRequestInfo = {
  id?: string;
  email?: string;
  /** The current status of the data deletion request. */
  status?: DataDeletionRequestStatus;
  /** The source from which the deletion request was created. */
  source?: DataDeletionRequestSource;
  requestedAt?: string;
  scheduledForProcessingAt?: string;
  completedAt?: string;
  createdAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataDeletionRequestInfoSchema: Schema<DataDeletionRequestInfo> =
  s.object<DataDeletionRequestInfo>(
    {
      id: s.optional(s.string()),
      email: s.optional(s.string()),
      status: s.optional(s.lazy(() => dataDeletionRequestStatusSchema)),
      source: s.optional(s.lazy(() => dataDeletionRequestSourceSchema)),
      requestedAt: s.optional(s.string()),
      scheduledForProcessingAt: s.optional(s.string()),
      completedAt: s.optional(s.string()),
      createdAt: s.optional(s.string()),
      _keysMap: {
        requestedAt: "requested_at",
        scheduledForProcessingAt: "scheduled_for_processing_at",
        completedAt: "completed_at",
        createdAt: "created_at",
      },
    },
    { additionalProperties: s.json() },
  );
