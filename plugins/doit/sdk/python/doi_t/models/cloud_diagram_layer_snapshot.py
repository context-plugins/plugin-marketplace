from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class CloudDiagramLayerSnapshot(SdkBaseModel):
    """A saved snapshot of a diagram layer's state."""

    id: str = Field(alias="_id")
    """Snapshot ID."""

    name: Optional[str] = UNSET
    """Snapshot name."""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """Timestamp when the snapshot was created."""

    prev_state: Optional[str] = Field(default=UNSET, alias="prevState")
    """ID of the previous snapshot in the chain."""


class CloudDiagramLayerSnapshotDict(TypedDict):
    id: str
    name: NotRequired[str]
    created_at: RFC3339DateTime
    prev_state: NotRequired[str]
