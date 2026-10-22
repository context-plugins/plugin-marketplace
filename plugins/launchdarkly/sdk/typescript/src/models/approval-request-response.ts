import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { approvalSettingsSchema, type ApprovalSettings } from "./approval-settings.js";
import { conflictSchema, type Conflict } from "./conflict.js";
import { copiedFromEnvSchema, type CopiedFromEnv } from "./copied-from-env.js";
import { customWorkflowMetaSchema, type CustomWorkflowMeta } from "./custom-workflow-meta.js";
import { integrationMetadataSchema, type IntegrationMetadata } from "./integration-metadata.js";
import { reviewResponseSchema, type ReviewResponse } from "./review-response.js";
import { reviewStatusSchema, type ReviewStatus } from "./review-status.js";
import { statusSchema, type Status } from "./status.js";

export type ApprovalRequestResponse = {
  /** The ID of this approval request */
  id: string;
  /** Version of the approval request */
  version: number;
  creationDate: number;
  serviceKind: string;
  /** The ID of the member who requested the approval */
  requestorId?: string;
  /** A human-friendly name for the approval request */
  description?: string;
  /** Current status of the review of this approval request */
  reviewStatus: ReviewStatus;
  /** An array of individual reviews of this approval request */
  allReviews: ReviewResponse[];
  /** An array of member IDs. These members are notified to review the approval request. */
  notifyMemberIds: string[];
  appliedDate?: number;
  /** The member ID of the member who applied the approval request */
  appliedByMemberId?: string;
  /** The service token ID of the service token which applied the approval request */
  appliedByServiceTokenId?: string;
  /** Current status of the approval request */
  status: Status;
  instructions: Record<string, unknown>[];
  /** Details on any conflicting approval requests */
  conflicts: Conflict[];
  /** The location and content type of related resources */
  links: Record<string, Record<string, unknown>>;
  executionDate?: number;
  /** ID of scheduled change to edit or delete */
  operatingOnId?: string;
  integrationMetadata?: IntegrationMetadata;
  source?: CopiedFromEnv;
  customWorkflowMetadata?: CustomWorkflowMeta;
  /** String representation of a resource */
  resourceId?: string;
  approvalSettings?: ApprovalSettings;
};

export const approvalRequestResponseSchema: Schema<ApprovalRequestResponse> =
  s.object<ApprovalRequestResponse>({
    id: s.string(),
    version: s.int(),
    creationDate: s.int(),
    serviceKind: s.string(),
    requestorId: s.optional(s.string()),
    description: s.optional(s.string()),
    reviewStatus: reviewStatusSchema,
    allReviews: s.array(s.lazy(() => reviewResponseSchema)),
    notifyMemberIds: s.array(s.string()),
    appliedDate: s.optional(s.int()),
    appliedByMemberId: s.optional(s.string()),
    appliedByServiceTokenId: s.optional(s.string()),
    status: statusSchema,
    instructions: s.array(s.record(s.string(), s.unknown())),
    conflicts: s.array(s.lazy(() => conflictSchema)),
    links: s.record(s.string(), s.record(s.string(), s.unknown())),
    executionDate: s.optional(s.int()),
    operatingOnId: s.optional(s.string()),
    integrationMetadata: s.optional(s.lazy(() => integrationMetadataSchema)),
    source: s.optional(s.lazy(() => copiedFromEnvSchema)),
    customWorkflowMetadata: s.optional(s.lazy(() => customWorkflowMetaSchema)),
    resourceId: s.optional(s.string()),
    approvalSettings: s.optional(s.lazy(() => approvalSettingsSchema)),
    _keysMap: {
      id: "_id",
      version: "_version",
      links: "_links",
    },
  });
