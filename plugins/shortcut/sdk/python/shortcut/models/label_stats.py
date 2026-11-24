from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LabelStats(SdkBaseModel):
    """A group of calculated values for this Label. This is not included if the slim? flag is set to true for the List
    Labels endpoint."""

    model_config = ConfigDict(extra="forbid")

    num_related_documents: int
    """The total number of Documents associated this Label."""

    num_epics: int
    """The total number of Epics with this Label."""

    num_stories_unstarted: int
    """The total number of stories unstarted Stories with this Label."""

    num_stories_total: int
    """The total number of Stories with this Label."""

    num_epics_unstarted: int
    """The number of unstarted epics associated with this label."""

    num_epics_in_progress: int
    """The number of in progress epics associated with this label."""

    num_points_unstarted: int
    """The total number of unstarted points with this Label."""

    num_stories_unestimated: int
    """The total number of Stories with no point estimate with this Label."""

    num_points_in_progress: int
    """The total number of in-progress points with this Label."""

    num_epics_total: int
    """The total number of Epics associated with this Label."""

    num_stories_completed: int
    """The total number of completed Stories with this Label."""

    num_points_completed: int
    """The total number of completed points with this Label."""

    num_stories_backlog: int
    """The total number of stories backlog Stories with this Label."""

    num_points_total: int
    """The total number of points with this Label."""

    num_stories_in_progress: int
    """The total number of in-progress Stories with this Label."""

    num_points_backlog: int
    """The total number of backlog points with this Label."""

    num_epics_completed: int
    """The number of completed Epics associated with this Label."""


class LabelStatsDict(TypedDict):
    num_related_documents: int
    num_epics: int
    num_stories_unstarted: int
    num_stories_total: int
    num_epics_unstarted: int
    num_epics_in_progress: int
    num_points_unstarted: int
    num_stories_unestimated: int
    num_points_in_progress: int
    num_epics_total: int
    num_stories_completed: int
    num_points_completed: int
    num_stories_backlog: int
    num_points_total: int
    num_stories_in_progress: int
    num_points_backlog: int
    num_epics_completed: int
