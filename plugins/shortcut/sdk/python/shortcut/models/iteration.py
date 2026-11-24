from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .iteration_associated_group import IterationAssociatedGroup, IterationAssociatedGroupDict
from .iteration_stats import IterationStats, IterationStatsDict
from .label import Label, LabelDict


class Iteration(SdkBaseModel):
    """An Iteration is a defined, time-boxed period of development for a collection of Stories. See
    https://help.shortcut.com/hc/en-us/articles/360028953452-Iterations-Overview for more information."""

    model_config = ConfigDict(extra="forbid")

    app_url: str
    """The Shortcut application url for the Iteration."""

    description: str
    """The description of the iteration."""

    entity_type: str
    """A string description of this resource"""

    labels: list[Label]
    """An array of labels attached to the iteration."""

    mention_ids: list[UUID]
    """``Deprecated:`` use ``member_mention_ids``."""

    member_mention_ids: list[UUID]
    """An array of Member IDs that have been mentioned in the Story description."""

    associated_groups: list[IterationAssociatedGroup]
    """An array containing Group IDs and Group-owned story counts for the Iteration's associated groups."""

    name: str
    """The name of the iteration."""

    global_id: str
    label_ids: list[int]
    """An array of label ids attached to the iteration."""

    updated_at: RFC3339DateTime
    """The instant when this iteration was last updated."""

    group_mention_ids: list[UUID]
    """An array of Group IDs that have been mentioned in the Story description."""

    end_date: RFC3339DateTime
    """The date this iteration ends."""

    follower_ids: list[UUID]
    """An array of UUIDs for any Members listed as Followers."""

    group_ids: list[UUID]
    """An array of UUIDs for any Groups you want to add as Followers. Currently, only one Group association is presented
    in our web UI."""

    start_date: RFC3339DateTime
    """The date this iteration begins."""

    status: str
    """The status of the iteration. Values are either "unstarted", "started", or "done"."""

    id: int
    """The ID of the iteration."""

    stats: IterationStats
    """A group of calculated values for this Iteration."""

    created_at: RFC3339DateTime
    """The instant when this iteration was created."""


class IterationDict(TypedDict):
    app_url: str
    description: str
    entity_type: str
    labels: list[LabelDict]
    mention_ids: list[UUID]
    member_mention_ids: list[UUID]
    associated_groups: list[IterationAssociatedGroupDict]
    name: str
    global_id: str
    label_ids: list[int]
    updated_at: RFC3339DateTime
    group_mention_ids: list[UUID]
    end_date: RFC3339DateTime
    follower_ids: list[UUID]
    group_ids: list[UUID]
    start_date: RFC3339DateTime
    status: str
    id: int
    stats: IterationStatsDict
    created_at: RFC3339DateTime
