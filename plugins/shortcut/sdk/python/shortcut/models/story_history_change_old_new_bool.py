from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StoryHistoryChangeOldNewBool(SdkBaseModel):
    """True if the Story has archived, otherwise false."""

    model_config = ConfigDict(extra="forbid")

    old: Optional[bool] = UNSET
    """The old value."""

    new: Optional[bool] = UNSET
    """The new value."""


class StoryHistoryChangeOldNewBoolDict(TypedDict):
    old: NotRequired[bool]
    new: NotRequired[bool]
