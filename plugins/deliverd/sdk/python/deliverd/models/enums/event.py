from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Event(str, Enum):
    REPORT_PUBLISHED = "report.published"
    REPORT_UPDATED = "report.updated"
    REPORT_SHARED = "report.shared"
    REPORT_VIEWED = "report.viewed"
    COMMENT_CREATED = "comment.created"
    ACCESS_REQUESTED = "access.requested"
    SCHEDULE_DUE = "schedule.due"
    PUBLISH_HELD = "publish.held"
    APPROVAL_REQUESTED = "approval.requested"
    APPROVAL_APPROVED = "approval.approved"
    APPROVAL_REJECTED = "approval.rejected"
    APPROVAL_EXPIRED = "approval.expired"
    APPROVAL_ESCALATED = "approval.escalated"
    APPROVAL_QUESTION = "approval.question"
    APPROVAL_ANSWERED = "approval.answered"
    APPROVAL_CHANGES_REQUESTED = "approval.changes_requested"
    REVIEW_REQUESTED = "review.requested"
    REVIEW_APPROVED = "review.approved"
    REVIEW_CHANGES_REQUESTED = "review.changes_requested"
    COLLECTION_REQUESTED = "collection.requested"
    COLLECTION_COMPLETED = "collection.completed"
    FLOW_COMPLETED = "flow.completed"
    GATE_DENIED = "gate.denied"
    GATE_CREATED = "gate.created"
    GATE_APPROVED = "gate.approved"
    GATE_REJECTED = "gate.rejected"
    GATE_CHANGES_REQUESTED = "gate.changes_requested"
    GATE_EXPIRED = "gate.expired"
    GATE_CANCELLED = "gate.cancelled"
    GATE_REVOKED = "gate.revoked"
    GATE_EXECUTED = "gate.executed"
    TASK_COMPLETED = "task.completed"
    TASK_BLOCKED = "task.blocked"
    SIDE_TASK_COMPLETED = "side_task.completed"
    RISK_INDICATOR_BREACHED = "risk_indicator.breached"
    CONTEXT_CHANGED = "context.changed"
    AUDIT_EVENT = "audit.event"

    __str__ = str.__str__


EventOrStr: TypeAlias = Annotated[Event | str, open_enum_validator(Event)]
