from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ProjectStats(SdkBaseModel):
    """A group of calculated values for this Project."""

    model_config = ConfigDict(extra="forbid")

    num_stories: int
    """The total number of stories in this Project."""

    num_points: int
    """The total number of points in this Project."""

    num_related_documents: int
    """The total number of documents related to this Project"""


class ProjectStatsDict(TypedDict):
    num_stories: int
    num_points: int
    num_related_documents: int
