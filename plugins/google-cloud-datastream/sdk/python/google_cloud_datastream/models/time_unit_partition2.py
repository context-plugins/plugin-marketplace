from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.partitioning_time_granularity1 import PartitioningTimeGranularity1OrStr


class TimeUnitPartition2(SdkBaseModel):
    """Time unit column partitioning."""

    partitioning_time_granularity: Optional[PartitioningTimeGranularity1OrStr] = Field(
        default=UNSET, alias="partitioningTimeGranularity"
    )
    """Optional. Partition granularity."""

    column: Optional[str] = UNSET
    """Required. The partitioning column."""


class TimeUnitPartition2Dict(TypedDict):
    partitioning_time_granularity: NotRequired[PartitioningTimeGranularity1OrStr]
    column: NotRequired[str]
