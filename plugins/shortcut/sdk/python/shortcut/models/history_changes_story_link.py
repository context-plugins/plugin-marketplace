from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .story_history_change_old_new_int import StoryHistoryChangeOldNewInt, StoryHistoryChangeOldNewIntDict
from .story_history_change_old_new_str import StoryHistoryChangeOldNewStr, StoryHistoryChangeOldNewStrDict


class HistoryChangesStoryLink(SdkBaseModel):
    """The changes that have occurred as a result of the action."""

    model_config = ConfigDict(extra="forbid")

    verb: Optional[StoryHistoryChangeOldNewStr] = UNSET
    """A timestamp that represents the Story's deadline."""

    object_id: Optional[StoryHistoryChangeOldNewInt] = UNSET
    """The estimate value for the Story"""

    subject_id: Optional[StoryHistoryChangeOldNewInt] = UNSET
    """The estimate value for the Story"""


class HistoryChangesStoryLinkDict(TypedDict):
    verb: NotRequired[StoryHistoryChangeOldNewStrDict]
    object_id: NotRequired[StoryHistoryChangeOldNewIntDict]
    subject_id: NotRequired[StoryHistoryChangeOldNewIntDict]
