from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CheckpointRef(SdkBaseModel):
    """A lightweight reference (id + display name) to a linked entity."""

    id: UUID
    name: Optional[str] = UNSET


class CheckpointRefDict(TypedDict):
    id: UUID
    name: NotRequired[str]
