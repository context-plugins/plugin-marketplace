from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .story_history_change_adds_removes_uuid import (
    StoryHistoryChangeAddsRemovesUuid,
    StoryHistoryChangeAddsRemovesUuidDict,
)
from .story_history_change_old_new_bool import StoryHistoryChangeOldNewBool, StoryHistoryChangeOldNewBoolDict
from .story_history_change_old_new_str import StoryHistoryChangeOldNewStr, StoryHistoryChangeOldNewStrDict


class HistoryChangesTask(SdkBaseModel):
    """The changes that have occurred as a result of the action."""

    model_config = ConfigDict(extra="forbid")

    complete: Optional[StoryHistoryChangeOldNewBool] = UNSET
    """True if the Story has archived, otherwise false."""

    description: Optional[StoryHistoryChangeOldNewStr] = UNSET
    """A timestamp that represents the Story's deadline."""

    mention_ids: Optional[StoryHistoryChangeAddsRemovesUuid] = UNSET
    """Custom Field Enum Value IDs that have been added or removed from the Story."""

    owner_ids: Optional[StoryHistoryChangeAddsRemovesUuid] = UNSET
    """Custom Field Enum Value IDs that have been added or removed from the Story."""


class HistoryChangesTaskDict(TypedDict):
    complete: NotRequired[StoryHistoryChangeOldNewBoolDict]
    description: NotRequired[StoryHistoryChangeOldNewStrDict]
    mention_ids: NotRequired[StoryHistoryChangeAddsRemovesUuidDict]
    owner_ids: NotRequired[StoryHistoryChangeAddsRemovesUuidDict]
