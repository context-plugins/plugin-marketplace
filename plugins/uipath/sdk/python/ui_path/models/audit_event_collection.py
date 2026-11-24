from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .audit_event import AuditEvent, AuditEventDict


class AuditEventCollection(SdkBaseModel):
    """Collection of audit events with pagination links"""

    audit_events: Optional[list[AuditEvent]] = Field(default=UNSET, alias="auditEvents")
    next: Optional[str] = UNSET
    """URL to retrieve newer audit events relative to the current result set"""

    previous: Optional[str] = UNSET
    """URL to retrieve older audit events relative to the current result set"""


class AuditEventCollectionDict(TypedDict):
    audit_events: NotRequired[list[AuditEventDict]]
    next: NotRequired[str]
    previous: NotRequired[str]
