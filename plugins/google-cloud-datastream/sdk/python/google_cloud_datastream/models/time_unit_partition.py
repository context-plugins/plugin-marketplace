from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.partitioning_time_granularity1 import PartitioningTimeGranularity1OrStr


class TimeUnitPartition(SdkBaseModel):
    """Time unit column partitioning. see
    https://cloud.google.com/bigquery/docs/partitioned-tables#date_timestamp_partitioned_tables"""

    partitioning_time_granularity: Optional[PartitioningTimeGranularity1OrStr] = Field(
        default=UNSET, alias="partitioningTimeGranularity"
    )
    """Optional. Partition granularity."""

    column: Optional[str] = UNSET
    """Required. The partitioning column."""


class TimeUnitPartitionDict(TypedDict):
    partitioning_time_granularity: NotRequired[PartitioningTimeGranularity1OrStr]
    column: NotRequired[str]
