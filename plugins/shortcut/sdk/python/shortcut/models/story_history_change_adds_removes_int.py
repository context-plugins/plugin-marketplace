from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StoryHistoryChangeAddsRemovesInt(SdkBaseModel):
    """Task IDs that have been added or removed from the Story."""

    model_config = ConfigDict(extra="forbid")

    adds: Optional[list[int]] = UNSET
    """The values that have been added."""

    removes: Optional[list[int]] = UNSET
    """The values that have been removed"""


class StoryHistoryChangeAddsRemovesIntDict(TypedDict):
    adds: NotRequired[list[int]]
    removes: NotRequired[list[int]]
