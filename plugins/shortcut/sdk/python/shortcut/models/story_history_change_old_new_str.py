from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class StoryHistoryChangeOldNewStr(SdkBaseModel):
    """A timestamp that represents the Story's deadline."""

    model_config = ConfigDict(extra="forbid")

    old: OptionalNullable[str] = UNSET
    """The old value."""

    new: Optional[str] = UNSET
    """The new value."""


class StoryHistoryChangeOldNewStrDict(TypedDict):
    old: NotRequired[str | None]
    new: NotRequired[str]
