from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class IdrRunStats(SdkBaseModel):
    num_source_rows: float = Field(alias="numSourceRows")
    """The exact number of rows processed from sources in this run."""

    num_new_unique_profiles: float = Field(alias="numNewUniqueProfiles")
    """The exact number of unique profiles in the graph created during this run."""

    num_unique_profiles: float = Field(alias="numUniqueProfiles")
    """The exact number of unique profiles in the graph at the end of the run."""


class IdrRunStatsDict(TypedDict):
    num_source_rows: float
    num_new_unique_profiles: float
    num_unique_profiles: float
