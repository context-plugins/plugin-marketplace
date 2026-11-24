from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ingestion_time_partition2 import IngestionTimePartition2, IngestionTimePartition2Dict
from .integer_range_partition2 import IntegerRangePartition2, IntegerRangePartition2Dict
from .time_unit_partition2 import TimeUnitPartition2, TimeUnitPartition2Dict


class BigQueryPartitioning(SdkBaseModel):
    """BigQuery partitioning configuration."""

    ingestion_time_partition: Optional[IngestionTimePartition2] = Field(default=UNSET, alias="ingestionTimePartition")
    """Ingestion time partitioning."""

    time_unit_partition: Optional[TimeUnitPartition2] = Field(default=UNSET, alias="timeUnitPartition")
    """Time unit column partitioning."""

    integer_range_partition: Optional[IntegerRangePartition2] = Field(default=UNSET, alias="integerRangePartition")
    """Integer range partitioning."""

    require_partition_filter: Optional[bool] = Field(default=UNSET, alias="requirePartitionFilter")
    """Optional. If true, queries over the table require a partition filter."""


class BigQueryPartitioningDict(TypedDict):
    ingestion_time_partition: NotRequired[IngestionTimePartition2Dict]
    time_unit_partition: NotRequired[TimeUnitPartition2Dict]
    integer_range_partition: NotRequired[IntegerRangePartition2Dict]
    require_partition_filter: NotRequired[bool]
