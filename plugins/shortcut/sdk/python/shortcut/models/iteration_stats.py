from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IterationStats(SdkBaseModel):
    """A group of calculated values for this Iteration."""

    model_config = ConfigDict(extra="forbid")

    num_points_done: int
    """The total number of completed points in this Iteration."""

    num_related_documents: int
    """The total number of documents related to an Iteration"""

    average_cycle_time: Optional[int] = UNSET
    """The average cycle time (in seconds) of completed stories in this Iteration."""

    num_stories_unstarted: int
    """The total number of unstarted Stories in this Iteration."""

    num_points_started: int
    """The total number of started points in this Iteration."""

    num_points_unstarted: int
    """The total number of unstarted points in this Iteration."""

    num_stories_started: int
    """The total number of started Stories in this Iteration."""

    num_stories_unestimated: int
    """The total number of Stories with no point estimate."""

    num_stories_backlog: int
    """The total number of backlog Stories in this Iteration."""

    average_lead_time: Optional[int] = UNSET
    """The average lead time (in seconds) of completed stories in this Iteration."""

    num_points_backlog: int
    """The total number of backlog points in this Iteration."""

    num_points: int
    """The total number of points in this Iteration."""

    num_stories_done: int
    """The total number of done Stories in this Iteration."""


class IterationStatsDict(TypedDict):
    num_points_done: int
    num_related_documents: int
    average_cycle_time: NotRequired[int]
    num_stories_unstarted: int
    num_points_started: int
    num_points_unstarted: int
    num_stories_started: int
    num_stories_unestimated: int
    num_stories_backlog: int
    average_lead_time: NotRequired[int]
    num_points_backlog: int
    num_points: int
    num_stories_done: int
