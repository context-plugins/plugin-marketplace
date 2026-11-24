import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type IdentificationEvidenceStatusResponse = {
  /** Internal ID of the evidence record. */
  id?: number;
  /** Unique transaction code for the identification process. */
  transactionCode?: string;
  /** Internal account ID associated with the identification. */
  accountId?: number;
  /** Internal workflow ID used for the identification process. */
  workflowId?: number;
  /** Current status of the identification process. */
  status?: Status;
  /** Present if the identification is pending manual review, otherwise null. */
  pendingReview?: string | null;
  /** Timestamp when the identification was created. */
  createdAt?: Date;
  /** Timestamp when the identification evidence expires. */
  expiresAt?: Date;
  /** Timestamp when the identification process was started by the signer. */
  startedAt?: Date;
  /** Timestamp when the identification process was completed. Null if not yet completed. */
  completedAt?: Date | null;
  /** Timestamp when the identification was reviewed. Null if not reviewed. */
  reviewedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const identificationEvidenceStatusResponseSchema: Schema<IdentificationEvidenceStatusResponse> =
  s.object<IdentificationEvidenceStatusResponse>(
    {
      id: s.optional(s.int()),
      transactionCode: s.optional(s.string()),
      accountId: s.optional(s.int()),
      workflowId: s.optional(s.int()),
      status: s.optional(s.lazy(() => statusSchema)),
      pendingReview: s.optionalNullable(s.string()),
      createdAt: s.optional(s.dateTime()),
      expiresAt: s.optional(s.dateTime()),
      startedAt: s.optional(s.dateTime()),
      completedAt: s.optionalNullable(s.dateTime()),
      reviewedAt: s.optionalNullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
