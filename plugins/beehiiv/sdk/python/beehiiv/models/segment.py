from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.segment_status import SegmentStatusOrStr
from .enums.segment_type import SegmentType, SegmentTypeOrStr
from .segment_stats import SegmentStats, SegmentStatsDict


class Segment(SdkBaseModel):
    """The segment object. To expand results, see the results endpoint."""

    id: str
    """The prefixed ID of the segment."""

    name: str
    """The name of the segment."""

    type_: SegmentTypeOrStr = Field(default=SegmentType.ALL, alias="type")
    """The type of segment.<br>``dynamic`` - The segment is recalculated at set intervals.<br>``static`` - The segment
    is calculated once at creation.<br>``manual`` - The segment is not calculated at all. The results are created via
    CSV."""

    last_calculated: Optional[int] = UNSET
    """The time the Segment was last calculated. Measured in seconds since the Unix epoch"""

    total_results: int
    """The total number of subscriptions that belong in the segment from the last calculation."""

    status: SegmentStatusOrStr
    """The status of the segment's most recent calculation.<br>``pending`` - The segment has not been calculated
    yet.<br>``processing`` - The calculation is in progress, and has not completed.<br>``completed`` - The calculation
    was successful.<br>``failed`` - Something went wrong during the calculation."""

    active: bool
    """Dynamic segments are marked inactive if they haven't been used in a specific period of time. Inactive segments
    will not automatically be recalculated."""

    stats: Optional[SegmentStats] = UNSET


class SegmentDict(TypedDict):
    id: str
    name: str
    type_: SegmentTypeOrStr
    last_calculated: NotRequired[int]
    total_results: int
    status: SegmentStatusOrStr
    active: bool
    stats: NotRequired[SegmentStatsDict]
