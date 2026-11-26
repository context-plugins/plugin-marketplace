from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.window import WindowOrStr
from .radar_calculation_params import RadarCalculationParams, RadarCalculationParamsDict
from .radar_context_summary import RadarContextSummary, RadarContextSummaryDict
from .radar_reading import RadarReading, RadarReadingDict
from .radar_signal_access import RadarSignalAccess, RadarSignalAccessDict
from .radar_snapshot_freshness import RadarSnapshotFreshness, RadarSnapshotFreshnessDict
from .radar_snapshot_summary import RadarSnapshotSummary, RadarSnapshotSummaryDict
from .radar_watchlist_coverage import RadarWatchlistCoverage, RadarWatchlistCoverageDict


class SnapshotPreviewDto(SdkBaseModel):
    snapshot_id: str
    methodology_version: str
    research_only: bool = True
    point_in_time: bool = False
    as_of: RFC3339DateTime
    preview_reference_at: RFC3339DateTime
    freshness: RadarSnapshotFreshness
    access: RadarSignalAccess
    window: WindowOrStr
    parameters: RadarCalculationParams
    limitations: list[str]
    input_hashes: dict[str, str]
    universe: int
    summary: RadarSnapshotSummary
    watchlist_coverage: RadarWatchlistCoverage
    total: int
    offset: int
    next_offset: int
    next_cursor: str
    previous_cursor: str
    results: list[RadarReading]
    event_context: Optional[RadarContextSummary] = UNSET
    """Context availability and timing for the selected snapshot, without ticker data."""


class SnapshotPreviewDtoDict(TypedDict):
    snapshot_id: str
    methodology_version: str
    research_only: NotRequired[bool]
    point_in_time: NotRequired[bool]
    as_of: RFC3339DateTime
    preview_reference_at: RFC3339DateTime
    freshness: RadarSnapshotFreshnessDict
    access: RadarSignalAccessDict
    window: WindowOrStr
    parameters: RadarCalculationParamsDict
    limitations: list[str]
    input_hashes: dict[str, str]
    universe: int
    summary: RadarSnapshotSummaryDict
    watchlist_coverage: RadarWatchlistCoverageDict
    total: int
    offset: int
    next_offset: int
    next_cursor: str
    previous_cursor: str
    results: list[RadarReadingDict]
    event_context: NotRequired[RadarContextSummaryDict]
