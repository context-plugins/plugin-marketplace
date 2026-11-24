from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.activity1 import Activity1OrStr


class CloudDiagramNodeActivity(SdkBaseModel):
    """An individual activity record scoped to a specific component node."""

    id: str = Field(alias="_id")
    """Activity record ID."""

    activity: Activity1OrStr
    """Activity type."""

    metadata: Optional[Any] = UNSET
    """Activity-specific payload (structure varies by activity type)."""

    timestamp: RFC3339DateTime
    """Timestamp of the activity."""

    user: str
    """ID of the user who performed the activity."""

    statussheet: str
    """Layer ID where the activity occurred."""


class CloudDiagramNodeActivityDict(TypedDict):
    id: str
    activity: Activity1OrStr
    metadata: NotRequired[Any]
    timestamp: RFC3339DateTime
    user: str
    statussheet: str
