from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StoryHistoryChangeAddsRemovesUuid(SdkBaseModel):
    """Custom Field Enum Value IDs that have been added or removed from the Story."""

    model_config = ConfigDict(extra="forbid")

    adds: Optional[list[UUID]] = UNSET
    """The values that have been added."""

    removes: Optional[list[UUID]] = UNSET
    """The values that have been removed"""


class StoryHistoryChangeAddsRemovesUuidDict(TypedDict):
    adds: NotRequired[list[UUID]]
    removes: NotRequired[list[UUID]]
