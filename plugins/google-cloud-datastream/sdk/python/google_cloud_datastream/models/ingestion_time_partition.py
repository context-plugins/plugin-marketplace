from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.partitioning_time_granularity import PartitioningTimeGranularityOrStr


class IngestionTimePartition(SdkBaseModel):
    """Ingestion time partitioning. see https://cloud.google.com/bigquery/docs/partitioned-tables#ingestion_time"""

    partitioning_time_granularity: Optional[PartitioningTimeGranularityOrStr] = Field(
        default=UNSET, alias="partitioningTimeGranularity"
    )
    """Optional. Partition granularity"""


class IngestionTimePartitionDict(TypedDict):
    partitioning_time_granularity: NotRequired[PartitioningTimeGranularityOrStr]
