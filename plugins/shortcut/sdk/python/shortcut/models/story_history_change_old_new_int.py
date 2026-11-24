from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StoryHistoryChangeOldNewInt(SdkBaseModel):
    """The estimate value for the Story"""

    model_config = ConfigDict(extra="forbid")

    old: Optional[int] = UNSET
    """The old value."""

    new: Optional[int] = UNSET
    """The new value."""


class StoryHistoryChangeOldNewIntDict(TypedDict):
    old: NotRequired[int]
    new: NotRequired[int]
