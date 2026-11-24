from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class EpicStats(SdkBaseModel):
    """A group of calculated values for this Epic."""

    model_config = ConfigDict(extra="forbid")

    num_points_done: int
    """The total number of completed points in this Epic."""

    num_related_documents: int
    """The total number of documents associated with this Epic."""

    num_stories_unstarted: int
    """The total number of unstarted Stories in this Epic."""

    num_stories_total: int
    """The total number of Stories in this Epic."""

    last_story_update: RFC3339DateTime | None
    """The date of the last update of a Story in this Epic."""

    num_points_started: int
    """The total number of started points in this Epic."""

    num_points_unstarted: int
    """The total number of unstarted points in this Epic."""

    num_stories_started: int
    """The total number of started Stories in this Epic."""

    num_stories_unestimated: int
    """The total number of Stories with no point estimate."""

    num_stories_backlog: int
    """The total number of backlog Stories in this Epic."""

    num_points_backlog: int
    """The total number of backlog points in this Epic."""

    num_points: int
    """The total number of points in this Epic."""

    num_stories_done: int
    """The total number of done Stories in this Epic."""


class EpicStatsDict(TypedDict):
    num_points_done: int
    num_related_documents: int
    num_stories_unstarted: int
    num_stories_total: int
    last_story_update: RFC3339DateTime | None
    num_points_started: int
    num_points_unstarted: int
    num_stories_started: int
    num_stories_unestimated: int
    num_stories_backlog: int
    num_points_backlog: int
    num_points: int
    num_stories_done: int
