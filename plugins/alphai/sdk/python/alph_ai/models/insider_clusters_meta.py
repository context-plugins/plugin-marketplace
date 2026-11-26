from __future__ import annotations

from typing_extensions import TypedDict

from ..core import Date, RFC3339DateTime, SdkBaseModel


class InsiderClustersMeta(SdkBaseModel):
    as_of: RFC3339DateTime
    """When the underlying computation ran (the list is refreshed every few minutes)."""

    coverage_since: Date | None
    """Earliest purchase date on record; nothing before it can appear."""

    episode_gap_days: int
    episode_max_days: int
    research_only: bool
    point_in_time: bool


class InsiderClustersMetaDict(TypedDict):
    as_of: RFC3339DateTime
    coverage_since: Date | None
    episode_gap_days: int
    episode_max_days: int
    research_only: bool
    point_in_time: bool
