from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StoryHistoryChangeOldNewUuid(SdkBaseModel):
    """The Team ID for the Story."""

    model_config = ConfigDict(extra="forbid")

    old: Optional[UUID] = UNSET
    """The old value."""

    new: Optional[UUID] = UNSET
    """The new value."""


class StoryHistoryChangeOldNewUuidDict(TypedDict):
    old: NotRequired[UUID]
    new: NotRequired[UUID]
