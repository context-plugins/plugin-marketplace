from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.partitioning_time_granularity import PartitioningTimeGranularityOrStr


class IngestionTimePartition2(SdkBaseModel):
    """Ingestion time partitioning."""

    partitioning_time_granularity: Optional[PartitioningTimeGranularityOrStr] = Field(
        default=UNSET, alias="partitioningTimeGranularity"
    )
    """Optional. Partition granularity"""


class IngestionTimePartition2Dict(TypedDict):
    partitioning_time_granularity: NotRequired[PartitioningTimeGranularityOrStr]
