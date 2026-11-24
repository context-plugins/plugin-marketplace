from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .audit_log import AuditLog, AuditLogDict


class AuditLogList(SdkBaseModel):
    """A list of audit log entries."""

    data: Optional[list[AuditLog]] = UNSET
    """Array of audit log objects."""


class AuditLogListDict(TypedDict):
    data: NotRequired[list[AuditLogDict]]
