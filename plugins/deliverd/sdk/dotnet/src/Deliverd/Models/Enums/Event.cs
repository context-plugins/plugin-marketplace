using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Event>))]
public sealed record Event : OpenStringEnum<Event>
{
    private Event(string value) : base(value)
    {
    }

    public static readonly Event ReportPublished = new("report.published");

    public static readonly Event ReportUpdated = new("report.updated");

    public static readonly Event ReportShared = new("report.shared");

    public static readonly Event ReportViewed = new("report.viewed");

    public static readonly Event CommentCreated = new("comment.created");

    public static readonly Event AccessRequested = new("access.requested");

    public static readonly Event ScheduleDue = new("schedule.due");

    public static readonly Event PublishHeld = new("publish.held");

    public static readonly Event ApprovalRequested = new("approval.requested");

    public static readonly Event ApprovalApproved = new("approval.approved");

    public static readonly Event ApprovalRejected = new("approval.rejected");

    public static readonly Event ApprovalExpired = new("approval.expired");

    public static readonly Event ApprovalEscalated = new("approval.escalated");

    public static readonly Event ApprovalQuestion = new("approval.question");

    public static readonly Event ApprovalAnswered = new("approval.answered");

    public static readonly Event ApprovalChangesRequested = new("approval.changes_requested");

    public static readonly Event ReviewRequested = new("review.requested");

    public static readonly Event ReviewApproved = new("review.approved");

    public static readonly Event ReviewChangesRequested = new("review.changes_requested");

    public static readonly Event CollectionRequested = new("collection.requested");

    public static readonly Event CollectionCompleted = new("collection.completed");

    public static readonly Event FlowCompleted = new("flow.completed");

    public static readonly Event GateDenied = new("gate.denied");

    public static readonly Event GateCreated = new("gate.created");

    public static readonly Event GateApproved = new("gate.approved");

    public static readonly Event GateRejected = new("gate.rejected");

    public static readonly Event GateChangesRequested = new("gate.changes_requested");

    public static readonly Event GateExpired = new("gate.expired");

    public static readonly Event GateCancelled = new("gate.cancelled");

    public static readonly Event GateRevoked = new("gate.revoked");

    public static readonly Event GateExecuted = new("gate.executed");

    public static readonly Event TaskCompleted = new("task.completed");

    public static readonly Event TaskBlocked = new("task.blocked");

    public static readonly Event SideTaskCompleted = new("side_task.completed");

    public static readonly Event RiskIndicatorBreached = new("risk_indicator.breached");

    public static readonly Event ContextChanged = new("context.changed");

    public static readonly Event AuditEvent = new("audit.event");

    public TResult Match<TResult>(Func<TResult> onReportPublished,
        Func<TResult> onReportUpdated,
        Func<TResult> onReportShared,
        Func<TResult> onReportViewed,
        Func<TResult> onCommentCreated,
        Func<TResult> onAccessRequested,
        Func<TResult> onScheduleDue,
        Func<TResult> onPublishHeld,
        Func<TResult> onApprovalRequested,
        Func<TResult> onApprovalApproved,
        Func<TResult> onApprovalRejected,
        Func<TResult> onApprovalExpired,
        Func<TResult> onApprovalEscalated,
        Func<TResult> onApprovalQuestion,
        Func<TResult> onApprovalAnswered,
        Func<TResult> onApprovalChangesRequested,
        Func<TResult> onReviewRequested,
        Func<TResult> onReviewApproved,
        Func<TResult> onReviewChangesRequested,
        Func<TResult> onCollectionRequested,
        Func<TResult> onCollectionCompleted,
        Func<TResult> onFlowCompleted,
        Func<TResult> onGateDenied,
        Func<TResult> onGateCreated,
        Func<TResult> onGateApproved,
        Func<TResult> onGateRejected,
        Func<TResult> onGateChangesRequested,
        Func<TResult> onGateExpired,
        Func<TResult> onGateCancelled,
        Func<TResult> onGateRevoked,
        Func<TResult> onGateExecuted,
        Func<TResult> onTaskCompleted,
        Func<TResult> onTaskBlocked,
        Func<TResult> onSideTaskCompleted,
        Func<TResult> onRiskIndicatorBreached,
        Func<TResult> onContextChanged,
        Func<TResult> onAuditEvent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ReportPublished => onReportPublished(),
            _ when this == ReportUpdated => onReportUpdated(),
            _ when this == ReportShared => onReportShared(),
            _ when this == ReportViewed => onReportViewed(),
            _ when this == CommentCreated => onCommentCreated(),
            _ when this == AccessRequested => onAccessRequested(),
            _ when this == ScheduleDue => onScheduleDue(),
            _ when this == PublishHeld => onPublishHeld(),
            _ when this == ApprovalRequested => onApprovalRequested(),
            _ when this == ApprovalApproved => onApprovalApproved(),
            _ when this == ApprovalRejected => onApprovalRejected(),
            _ when this == ApprovalExpired => onApprovalExpired(),
            _ when this == ApprovalEscalated => onApprovalEscalated(),
            _ when this == ApprovalQuestion => onApprovalQuestion(),
            _ when this == ApprovalAnswered => onApprovalAnswered(),
            _ when this == ApprovalChangesRequested => onApprovalChangesRequested(),
            _ when this == ReviewRequested => onReviewRequested(),
            _ when this == ReviewApproved => onReviewApproved(),
            _ when this == ReviewChangesRequested => onReviewChangesRequested(),
            _ when this == CollectionRequested => onCollectionRequested(),
            _ when this == CollectionCompleted => onCollectionCompleted(),
            _ when this == FlowCompleted => onFlowCompleted(),
            _ when this == GateDenied => onGateDenied(),
            _ when this == GateCreated => onGateCreated(),
            _ when this == GateApproved => onGateApproved(),
            _ when this == GateRejected => onGateRejected(),
            _ when this == GateChangesRequested => onGateChangesRequested(),
            _ when this == GateExpired => onGateExpired(),
            _ when this == GateCancelled => onGateCancelled(),
            _ when this == GateRevoked => onGateRevoked(),
            _ when this == GateExecuted => onGateExecuted(),
            _ when this == TaskCompleted => onTaskCompleted(),
            _ when this == TaskBlocked => onTaskBlocked(),
            _ when this == SideTaskCompleted => onSideTaskCompleted(),
            _ when this == RiskIndicatorBreached => onRiskIndicatorBreached(),
            _ when this == ContextChanged => onContextChanged(),
            _ when this == AuditEvent => onAuditEvent(),
            _ => otherwise(Value)
        };

    public void Match(Action onReportPublished,
        Action onReportUpdated,
        Action onReportShared,
        Action onReportViewed,
        Action onCommentCreated,
        Action onAccessRequested,
        Action onScheduleDue,
        Action onPublishHeld,
        Action onApprovalRequested,
        Action onApprovalApproved,
        Action onApprovalRejected,
        Action onApprovalExpired,
        Action onApprovalEscalated,
        Action onApprovalQuestion,
        Action onApprovalAnswered,
        Action onApprovalChangesRequested,
        Action onReviewRequested,
        Action onReviewApproved,
        Action onReviewChangesRequested,
        Action onCollectionRequested,
        Action onCollectionCompleted,
        Action onFlowCompleted,
        Action onGateDenied,
        Action onGateCreated,
        Action onGateApproved,
        Action onGateRejected,
        Action onGateChangesRequested,
        Action onGateExpired,
        Action onGateCancelled,
        Action onGateRevoked,
        Action onGateExecuted,
        Action onTaskCompleted,
        Action onTaskBlocked,
        Action onSideTaskCompleted,
        Action onRiskIndicatorBreached,
        Action onContextChanged,
        Action onAuditEvent,
        Action<string> otherwise)
    {
        if (this == ReportPublished) onReportPublished();
        else if (this == ReportUpdated) onReportUpdated();
        else if (this == ReportShared) onReportShared();
        else if (this == ReportViewed) onReportViewed();
        else if (this == CommentCreated) onCommentCreated();
        else if (this == AccessRequested) onAccessRequested();
        else if (this == ScheduleDue) onScheduleDue();
        else if (this == PublishHeld) onPublishHeld();
        else if (this == ApprovalRequested) onApprovalRequested();
        else if (this == ApprovalApproved) onApprovalApproved();
        else if (this == ApprovalRejected) onApprovalRejected();
        else if (this == ApprovalExpired) onApprovalExpired();
        else if (this == ApprovalEscalated) onApprovalEscalated();
        else if (this == ApprovalQuestion) onApprovalQuestion();
        else if (this == ApprovalAnswered) onApprovalAnswered();
        else if (this == ApprovalChangesRequested) onApprovalChangesRequested();
        else if (this == ReviewRequested) onReviewRequested();
        else if (this == ReviewApproved) onReviewApproved();
        else if (this == ReviewChangesRequested) onReviewChangesRequested();
        else if (this == CollectionRequested) onCollectionRequested();
        else if (this == CollectionCompleted) onCollectionCompleted();
        else if (this == FlowCompleted) onFlowCompleted();
        else if (this == GateDenied) onGateDenied();
        else if (this == GateCreated) onGateCreated();
        else if (this == GateApproved) onGateApproved();
        else if (this == GateRejected) onGateRejected();
        else if (this == GateChangesRequested) onGateChangesRequested();
        else if (this == GateExpired) onGateExpired();
        else if (this == GateCancelled) onGateCancelled();
        else if (this == GateRevoked) onGateRevoked();
        else if (this == GateExecuted) onGateExecuted();
        else if (this == TaskCompleted) onTaskCompleted();
        else if (this == TaskBlocked) onTaskBlocked();
        else if (this == SideTaskCompleted) onSideTaskCompleted();
        else if (this == RiskIndicatorBreached) onRiskIndicatorBreached();
        else if (this == ContextChanged) onContextChanged();
        else if (this == AuditEvent) onAuditEvent();
        else otherwise(Value);
    }
}
