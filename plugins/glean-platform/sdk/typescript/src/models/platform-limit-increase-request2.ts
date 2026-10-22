import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entityTypeSchema, type EntityType } from "./entity-type.js";
import {
  platformRequestResolutionTarget1Schema,
  type PlatformRequestResolutionTarget1,
} from "./platform-request-resolution-target1.js";
import { platformRequestScope1Schema, type PlatformRequestScope1 } from "./platform-request-scope1.js";
import { platformRequestStatus2Schema, type PlatformRequestStatus2 } from "./platform-request-status2.js";

/** Authorized request at its current stored state. */
export type PlatformLimitIncreaseRequest2 = {
  /** Server-assigned resource identifier, distinct from the response's trace request_id. */
  requestId: string;
  /** Whether the request concerns a user or an agent. */
  entityType: EntityType;
  /** Canonical user ID or agent ID whose limit the request concerns. */
  entityId: string;
  /** Spend client for this user or agent request. */
  clientId: string;
  /** Authenticated user who created the request. */
  requesterUserId: string;
  /** Stored explanation of why the increase is needed, when supplied. */
  businessJustification?: string;
  /** Stored request month; resolution does not change this month. */
  period: string;
  /** Current stored request state. */
  status: PlatformRequestStatus2;
  /** User who resolved the request, when available. */
  resolvedByUserId?: string;
  /** Stored additive approval amount, when available. */
  approvedIncreaseAmount?: string;
  /** Approval scope derived from the stored ongoing flag, when available. */
  scope?: PlatformRequestScope1;
  /** Stored approval breadth, when available. */
  resolutionTarget?: PlatformRequestResolutionTarget1;
  /** Stored department or canonical IdP group ID, when available. */
  resolutionTargetId?: string;
  /** Stored denial note, when supplied. */
  resolutionNote?: string;
  /** Request creation time. */
  createdAt: Date;
  /** Last stored update time; this is the resolution time for resolved requests. */
  updatedAt?: Date;
};

export const platformLimitIncreaseRequest2Schema: Schema<PlatformLimitIncreaseRequest2> =
  s.object<PlatformLimitIncreaseRequest2>({
    requestId: s.string(),
    entityType: entityTypeSchema,
    entityId: s.string(),
    clientId: s.string(),
    requesterUserId: s.string(),
    businessJustification: s.optional(s.string()),
    period: s.string(),
    status: platformRequestStatus2Schema,
    resolvedByUserId: s.optional(s.string()),
    approvedIncreaseAmount: s.optional(s.string()),
    scope: s.optional(s.lazy(() => platformRequestScope1Schema)),
    resolutionTarget: s.optional(s.lazy(() => platformRequestResolutionTarget1Schema)),
    resolutionTargetId: s.optional(s.string()),
    resolutionNote: s.optional(s.string()),
    createdAt: s.dateTime(),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      requestId: "request_id",
      entityType: "entity_type",
      entityId: "entity_id",
      clientId: "client_id",
      requesterUserId: "requester_user_id",
      businessJustification: "business_justification",
      resolvedByUserId: "resolved_by_user_id",
      approvedIncreaseAmount: "approved_increase_amount",
      resolutionTarget: "resolution_target",
      resolutionTargetId: "resolution_target_id",
      resolutionNote: "resolution_note",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  });
