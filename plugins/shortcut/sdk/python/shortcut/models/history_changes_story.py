from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .story_history_change_adds_removes_int import (
    StoryHistoryChangeAddsRemovesInt,
    StoryHistoryChangeAddsRemovesIntDict,
)
from .story_history_change_adds_removes_uuid import (
    StoryHistoryChangeAddsRemovesUuid,
    StoryHistoryChangeAddsRemovesUuidDict,
)
from .story_history_change_old_new_bool import StoryHistoryChangeOldNewBool, StoryHistoryChangeOldNewBoolDict
from .story_history_change_old_new_int import StoryHistoryChangeOldNewInt, StoryHistoryChangeOldNewIntDict
from .story_history_change_old_new_str import StoryHistoryChangeOldNewStr, StoryHistoryChangeOldNewStrDict
from .story_history_change_old_new_uuid import StoryHistoryChangeOldNewUuid, StoryHistoryChangeOldNewUuidDict


class HistoryChangesStory(SdkBaseModel):
    """The changes that have occurred as a result of the action."""

    model_config = ConfigDict(extra="forbid")

    description: Optional[StoryHistoryChangeOldNewStr] = UNSET
    """A timestamp that represents the Story's deadline."""

    archived: Optional[StoryHistoryChangeOldNewBool] = UNSET
    """True if the Story has archived, otherwise false."""

    started: Optional[StoryHistoryChangeOldNewBool] = UNSET
    """True if the Story has archived, otherwise false."""

    task_ids: Optional[StoryHistoryChangeAddsRemovesInt] = UNSET
    """Task IDs that have been added or removed from the Story."""

    mention_ids: Optional[StoryHistoryChangeAddsRemovesUuid] = UNSET
    """Custom Field Enum Value IDs that have been added or removed from the Story."""

    story_type: Optional[StoryHistoryChangeOldNewStr] = UNSET
    """A timestamp that represents the Story's deadline."""

    name: Optional[StoryHistoryChangeOldNewStr] = UNSET
    """A timestamp that represents the Story's deadline."""

    completed: Optional[StoryHistoryChangeOldNewBool] = UNSET
    """True if the Story has archived, otherwise false."""

    blocker: Optional[StoryHistoryChangeOldNewBool] = UNSET
    """True if the Story has archived, otherwise false."""

    epic_id: Optional[StoryHistoryChangeOldNewInt] = UNSET
    """The estimate value for the Story"""

    branch_ids: Optional[StoryHistoryChangeAddsRemovesInt] = UNSET
    """Task IDs that have been added or removed from the Story."""

    commit_ids: Optional[StoryHistoryChangeAddsRemovesInt] = UNSET
    """Task IDs that have been added or removed from the Story."""

    requested_by_id: Optional[StoryHistoryChangeOldNewUuid] = UNSET
    """The Team ID for the Story."""

    iteration_id: Optional[StoryHistoryChangeOldNewInt] = UNSET
    """The estimate value for the Story"""

    label_ids: Optional[StoryHistoryChangeAddsRemovesInt] = UNSET
    """Task IDs that have been added or removed from the Story."""

    group_id: Optional[StoryHistoryChangeOldNewUuid] = UNSET
    """The Team ID for the Story."""

    workflow_state_id: Optional[StoryHistoryChangeOldNewInt] = UNSET
    """The estimate value for the Story"""

    object_story_link_ids: Optional[StoryHistoryChangeAddsRemovesInt] = UNSET
    """Task IDs that have been added or removed from the Story."""

    follower_ids: Optional[StoryHistoryChangeAddsRemovesUuid] = UNSET
    """Custom Field Enum Value IDs that have been added or removed from the Story."""

    owner_ids: Optional[StoryHistoryChangeAddsRemovesUuid] = UNSET
    """Custom Field Enum Value IDs that have been added or removed from the Story."""

    custom_field_value_ids: Optional[StoryHistoryChangeAddsRemovesUuid] = UNSET
    """Custom Field Enum Value IDs that have been added or removed from the Story."""

    parent_story_id: Optional[StoryHistoryChangeOldNewInt] = UNSET
    """The estimate value for the Story"""

    estimate: Optional[StoryHistoryChangeOldNewInt] = UNSET
    """The estimate value for the Story"""

    subject_story_link_ids: Optional[StoryHistoryChangeAddsRemovesInt] = UNSET
    """Task IDs that have been added or removed from the Story."""

    blocked: Optional[StoryHistoryChangeOldNewBool] = UNSET
    """True if the Story has archived, otherwise false."""

    project_id: Optional[StoryHistoryChangeOldNewInt] = UNSET
    """The estimate value for the Story"""

    deadline: Optional[StoryHistoryChangeOldNewStr] = UNSET
    """A timestamp that represents the Story's deadline."""


class HistoryChangesStoryDict(TypedDict):
    description: NotRequired[StoryHistoryChangeOldNewStrDict]
    archived: NotRequired[StoryHistoryChangeOldNewBoolDict]
    started: NotRequired[StoryHistoryChangeOldNewBoolDict]
    task_ids: NotRequired[StoryHistoryChangeAddsRemovesIntDict]
    mention_ids: NotRequired[StoryHistoryChangeAddsRemovesUuidDict]
    story_type: NotRequired[StoryHistoryChangeOldNewStrDict]
    name: NotRequired[StoryHistoryChangeOldNewStrDict]
    completed: NotRequired[StoryHistoryChangeOldNewBoolDict]
    blocker: NotRequired[StoryHistoryChangeOldNewBoolDict]
    epic_id: NotRequired[StoryHistoryChangeOldNewIntDict]
    branch_ids: NotRequired[StoryHistoryChangeAddsRemovesIntDict]
    commit_ids: NotRequired[StoryHistoryChangeAddsRemovesIntDict]
    requested_by_id: NotRequired[StoryHistoryChangeOldNewUuidDict]
    iteration_id: NotRequired[StoryHistoryChangeOldNewIntDict]
    label_ids: NotRequired[StoryHistoryChangeAddsRemovesIntDict]
    group_id: NotRequired[StoryHistoryChangeOldNewUuidDict]
    workflow_state_id: NotRequired[StoryHistoryChangeOldNewIntDict]
    object_story_link_ids: NotRequired[StoryHistoryChangeAddsRemovesIntDict]
    follower_ids: NotRequired[StoryHistoryChangeAddsRemovesUuidDict]
    owner_ids: NotRequired[StoryHistoryChangeAddsRemovesUuidDict]
    custom_field_value_ids: NotRequired[StoryHistoryChangeAddsRemovesUuidDict]
    parent_story_id: NotRequired[StoryHistoryChangeOldNewIntDict]
    estimate: NotRequired[StoryHistoryChangeOldNewIntDict]
    subject_story_link_ids: NotRequired[StoryHistoryChangeAddsRemovesIntDict]
    blocked: NotRequired[StoryHistoryChangeOldNewBoolDict]
    project_id: NotRequired[StoryHistoryChangeOldNewIntDict]
    deadline: NotRequired[StoryHistoryChangeOldNewStrDict]
