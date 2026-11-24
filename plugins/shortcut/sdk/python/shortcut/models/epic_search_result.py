from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .epic_associated_group import EpicAssociatedGroup, EpicAssociatedGroupDict
from .epic_stats import EpicStats, EpicStatsDict
from .health import Health, HealthDict
from .label_slim import LabelSlim, LabelSlimDict
from .threaded_comment import ThreadedComment, ThreadedCommentDict


class EpicSearchResult(SdkBaseModel):
    """An Epic in search results. This is typed differently from Epic because the details=slim search argument will omit
    some fields."""

    model_config = ConfigDict(extra="forbid")

    app_url: str
    """The Shortcut application url for the Epic."""

    description: Optional[str] = UNSET
    """The Epic's description."""

    archived: bool
    """True/false boolean that indicates whether the Epic is archived or not."""

    started: bool
    """A true/false boolean indicating if the Epic has been started."""

    entity_type: str
    """A string description of this resource."""

    labels: list[LabelSlim]
    """An array of Labels attached to the Epic."""

    mention_ids: list[UUID]
    """``Deprecated:`` use ``member_mention_ids``."""

    member_mention_ids: list[UUID]
    """An array of Member IDs that have been mentioned in the Epic description."""

    associated_groups: list[EpicAssociatedGroup]
    """An array containing Group IDs and Group-owned story counts for the Epic's associated groups."""

    project_ids: list[int]
    """The IDs of Projects related to this Epic."""

    stories_without_projects: int
    """The number of stories in this epic which are not associated with a project."""

    completed_at_override: RFC3339DateTime | None
    """A manual override for the time/date the Epic was completed."""

    productboard_plugin_id: UUID | None
    """The ID of the associated productboard integration."""

    started_at: RFC3339DateTime | None
    """The time/date the Epic was started."""

    completed_at: RFC3339DateTime | None
    """The time/date the Epic was completed."""

    objective_ids: list[int]
    """An array of IDs for Objectives to which this epic is related."""

    name: str
    """The name of the Epic."""

    global_id: str
    completed: bool
    """A true/false boolean indicating if the Epic has been completed."""

    comments: Optional[list[ThreadedComment]] = UNSET
    """A nested array of threaded comments."""

    productboard_url: str | None
    """The URL of the associated productboard feature."""

    planned_start_date: RFC3339DateTime | None
    """The Epic's planned start date."""

    state: str
    """``Deprecated`` The workflow state that the Epic is in."""

    milestone_id: int | None
    """``Deprecated`` The ID of the Objective this Epic is related to. Use ``objective_ids``."""

    requested_by_id: UUID
    """The ID of the Member that requested the epic."""

    epic_state_id: int
    """The ID of the Epic State."""

    label_ids: list[int]
    """An array of Label ids attached to the Epic."""

    started_at_override: RFC3339DateTime | None
    """A manual override for the time/date the Epic was started."""

    group_id: UUID | None
    """``Deprecated`` The ID of the group to associate with the epic. Use ``group_ids``."""

    updated_at: RFC3339DateTime | None
    """The time/date the Epic was updated."""

    group_mention_ids: list[UUID]
    """An array of Group IDs that have been mentioned in the Epic description."""

    productboard_id: UUID | None
    """The ID of the associated productboard feature."""

    follower_ids: list[UUID]
    """An array of UUIDs for any Members you want to add as Followers on this Epic."""

    group_ids: list[UUID]
    """An array of UUIDS for Groups to which this Epic is related."""

    owner_ids: list[UUID]
    """An array of UUIDs for any members you want to add as Owners on this new Epic."""

    external_id: str | None
    """This field can be set to another unique ID. In the case that the Epic has been imported from another tool, the ID
    in the other tool can be indicated here."""

    id: int
    """The unique ID of the Epic."""

    health: Optional[Health] = UNSET
    """The current health status of the Epic."""

    position: int
    """The Epic's relative position in the Epic workflow state."""

    productboard_name: str | None
    """The name of the associated productboard feature."""

    deadline: RFC3339DateTime | None
    """The Epic's deadline."""

    stats: EpicStats
    """A group of calculated values for this Epic."""

    created_at: RFC3339DateTime | None
    """The time/date the Epic was created."""


class EpicSearchResultDict(TypedDict):
    app_url: str
    description: NotRequired[str]
    archived: bool
    started: bool
    entity_type: str
    labels: list[LabelSlimDict]
    mention_ids: list[UUID]
    member_mention_ids: list[UUID]
    associated_groups: list[EpicAssociatedGroupDict]
    project_ids: list[int]
    stories_without_projects: int
    completed_at_override: RFC3339DateTime | None
    productboard_plugin_id: UUID | None
    started_at: RFC3339DateTime | None
    completed_at: RFC3339DateTime | None
    objective_ids: list[int]
    name: str
    global_id: str
    completed: bool
    comments: NotRequired[list[ThreadedCommentDict]]
    productboard_url: str | None
    planned_start_date: RFC3339DateTime | None
    state: str
    milestone_id: int | None
    requested_by_id: UUID
    epic_state_id: int
    label_ids: list[int]
    started_at_override: RFC3339DateTime | None
    group_id: UUID | None
    updated_at: RFC3339DateTime | None
    group_mention_ids: list[UUID]
    productboard_id: UUID | None
    follower_ids: list[UUID]
    group_ids: list[UUID]
    owner_ids: list[UUID]
    external_id: str | None
    id: int
    health: NotRequired[HealthDict]
    position: int
    productboard_name: str | None
    deadline: RFC3339DateTime | None
    stats: EpicStatsDict
    created_at: RFC3339DateTime | None
