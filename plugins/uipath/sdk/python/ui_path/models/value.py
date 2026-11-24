from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.alert_severity import AlertSeverityOrStr


class Value(SdkBaseModel):
    id: Optional[int] = Field(default=UNSET, alias="Id")
    """Unique alert identifier"""

    notification_name: Optional[str] = Field(default=UNSET, alias="NotificationName")
    """Name of the alert notification"""

    alert_severity: Optional[AlertSeverityOrStr] = Field(default=UNSET, alias="AlertSeverity")
    """Severity level of the alert"""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """Alert message content"""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """ISO 8601 timestamp when the alert was created"""

    component: Optional[str] = Field(default=UNSET, alias="Component")
    """The Orchestrator component that generated the alert"""


class ValueDict(TypedDict):
    id: NotRequired[int]
    notification_name: NotRequired[str]
    alert_severity: NotRequired[AlertSeverityOrStr]
    message: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    component: NotRequired[str]
