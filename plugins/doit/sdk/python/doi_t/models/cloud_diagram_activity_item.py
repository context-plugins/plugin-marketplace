from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.activity import ActivityOrStr


class CloudDiagramActivityItem(SdkBaseModel):
    """An individual activity record within an activity group."""

    id: str = Field(alias="_id")
    """Activity record ID."""

    group: str
    """ID of the activity group this record belongs to."""

    activity: ActivityOrStr
    """Activity type."""

    metadata: Optional[Any] = UNSET
    """Activity-specific payload (structure varies by activity type)."""

    timestamp: RFC3339DateTime
    """Timestamp of the activity."""

    service_type: Optional[str] = UNSET
    """Cloud service type the activity applies to."""

    group_type: Optional[str] = UNSET
    """Activity group sub-type."""

    tags: Optional[list[str]] = UNSET
    """Tags associated with the activity."""


class CloudDiagramActivityItemDict(TypedDict):
    id: str
    group: str
    activity: ActivityOrStr
    metadata: NotRequired[Any]
    timestamp: RFC3339DateTime
    service_type: NotRequired[str]
    group_type: NotRequired[str]
    tags: NotRequired[list[str]]
