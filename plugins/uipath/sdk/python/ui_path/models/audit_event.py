from __future__ import annotations

from typing import Any

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .client_info import ClientInfo, ClientInfoDict
from .enums.status import StatusOrInt


class AuditEvent(SdkBaseModel):
    """A single audit event record"""

    id: Optional[str] = UNSET
    """Unique identifier of the audit event"""

    created_on: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdOn")
    """ISO 8601 timestamp when the event occurred"""

    organization_id: Optional[str] = Field(default=UNSET, alias="organizationId")
    """Identifier of the organization in which the event occurred"""

    actor_id: Optional[str] = Field(default=UNSET, alias="actorId")
    """Identifier of the user or service that performed the action"""

    actor_email: Optional[EmailStr] = Field(default=UNSET, alias="actorEmail")
    """Email address of the actor who performed the action"""

    event_type: Optional[str] = Field(default=UNSET, alias="eventType")
    """Type identifier of the audit event"""

    event_source: Optional[str] = Field(default=UNSET, alias="eventSource")
    """Service that generated the audit event"""

    event_target: Optional[str] = Field(default=UNSET, alias="eventTarget")
    """Category of resource targeted by the action"""

    event_details: Optional[Any] = Field(default=UNSET, alias="eventDetails")
    """Detailed payload of the audit event in service-specific format"""

    event_summary: Optional[str] = Field(default=UNSET, alias="eventSummary")
    """Human-readable summary of the audit event"""

    status: Optional[StatusOrInt] = UNSET
    """Outcome status (0 = success, 1 = failed)"""

    client_info: Optional[ClientInfo] = Field(default=UNSET, alias="clientInfo")
    """Client connection information for an audit event"""


class AuditEventDict(TypedDict):
    id: NotRequired[str]
    created_on: NotRequired[RFC3339DateTime]
    organization_id: NotRequired[str]
    actor_id: NotRequired[str]
    actor_email: NotRequired[EmailStr]
    event_type: NotRequired[str]
    event_source: NotRequired[str]
    event_target: NotRequired[str]
    event_details: NotRequired[Any]
    event_summary: NotRequired[str]
    status: NotRequired[StatusOrInt]
    client_info: NotRequired[ClientInfoDict]
