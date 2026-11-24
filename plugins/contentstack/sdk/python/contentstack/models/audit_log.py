from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class AuditLog(SdkBaseModel):
    """An audit log entry recording an administrative action."""

    uid: Optional[str] = UNSET
    """Unique identifier of the audit log entry."""

    action: Optional[str] = UNSET
    """The administrative action that was performed."""

    performed_by: Optional[str] = UNSET
    """UID of the user who performed the action."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the action was performed."""


class AuditLogDict(TypedDict):
    uid: NotRequired[str]
    action: NotRequired[str]
    performed_by: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
