import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Which event to send, with obviously fake ids and "test": true beside it. Default
 * report.published.
 */
export const Event6 = {
  ReportPublished: "report.published",
  ReportUpdated: "report.updated",
  ReportShared: "report.shared",
  ReportViewed: "report.viewed",
  CommentCreated: "comment.created",
  AccessRequested: "access.requested",
  ScheduleDue: "schedule.due",
  PublishHeld: "publish.held",
  ApprovalRequested: "approval.requested",
  ApprovalApproved: "approval.approved",
  ApprovalRejected: "approval.rejected",
  ApprovalExpired: "approval.expired",
  ApprovalEscalated: "approval.escalated",
  ApprovalQuestion: "approval.question",
  ApprovalAnswered: "approval.answered",
  ApprovalChangesRequested: "approval.changes_requested",
  ReviewRequested: "review.requested",
  ReviewApproved: "review.approved",
  ReviewChangesRequested: "review.changes_requested",
  CollectionRequested: "collection.requested",
  CollectionCompleted: "collection.completed",
  FlowCompleted: "flow.completed",
  GateDenied: "gate.denied",
  GateCreated: "gate.created",
  GateApproved: "gate.approved",
  GateRejected: "gate.rejected",
  GateChangesRequested: "gate.changes_requested",
  GateExpired: "gate.expired",
  GateCancelled: "gate.cancelled",
  GateRevoked: "gate.revoked",
  GateExecuted: "gate.executed",
  TaskCompleted: "task.completed",
  TaskBlocked: "task.blocked",
  SideTaskCompleted: "side_task.completed",
  RiskIndicatorBreached: "risk_indicator.breached",
  ContextChanged: "context.changed",
  AuditEvent: "audit.event",
} as const;
export type Event6 = (typeof Event6)[keyof typeof Event6] | (string & {});

export const event6Schema: EnumSchema<Event6> = s.enumOf<Event6>(Event6);
