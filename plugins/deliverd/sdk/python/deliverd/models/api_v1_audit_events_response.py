from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .audit_event import AuditEvent, AuditEventDict


class ApiV1AuditEventsResponse(SdkBaseModel):
    audit_events: list[AuditEvent] = Field(alias="auditEvents")
    next_cursor: str | None = Field(alias="nextCursor")
    """Pass back as ?cursor= for the next page. Null means this is the end."""


class ApiV1AuditEventsResponseDict(TypedDict):
    audit_events: list[AuditEventDict]
    next_cursor: str | None
