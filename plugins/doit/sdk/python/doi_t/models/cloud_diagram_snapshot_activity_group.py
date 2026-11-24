from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .cloud_diagram_activity_item import CloudDiagramActivityItem, CloudDiagramActivityItemDict


class CloudDiagramSnapshotActivityGroup(SdkBaseModel):
    """A snapshot activity group containing the individual activity records that produced it."""

    id: str = Field(alias="_id")
    """Activity group ID."""

    statussheet: str
    """Layer ID this group belongs to."""

    timestamp: RFC3339DateTime
    """Timestamp of the activity group."""

    tags: Optional[list[str]] = UNSET
    """Tags associated with the group."""

    snapshot: str
    """ID of the associated snapshot (equal to the group ID)."""

    items: Optional[list[CloudDiagramActivityItem]] = UNSET
    """Individual activity records within this group."""


class CloudDiagramSnapshotActivityGroupDict(TypedDict):
    id: str
    statussheet: str
    timestamp: RFC3339DateTime
    tags: NotRequired[list[str]]
    snapshot: str
    items: NotRequired[list[CloudDiagramActivityItemDict]]
