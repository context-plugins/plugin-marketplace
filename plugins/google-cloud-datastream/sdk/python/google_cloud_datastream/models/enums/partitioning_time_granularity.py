from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PartitioningTimeGranularity(str, Enum):
    """Optional. Partition granularity"""

    PARTITIONING_TIME_GRANULARITY_UNSPECIFIED = "PARTITIONING_TIME_GRANULARITY_UNSPECIFIED"
    PARTITIONING_TIME_GRANULARITY_HOUR = "PARTITIONING_TIME_GRANULARITY_HOUR"
    PARTITIONING_TIME_GRANULARITY_DAY = "PARTITIONING_TIME_GRANULARITY_DAY"
    PARTITIONING_TIME_GRANULARITY_MONTH = "PARTITIONING_TIME_GRANULARITY_MONTH"
    PARTITIONING_TIME_GRANULARITY_YEAR = "PARTITIONING_TIME_GRANULARITY_YEAR"

    __str__ = str.__str__


PartitioningTimeGranularityOrStr: TypeAlias = Annotated[
    PartitioningTimeGranularity | str, open_enum_validator(PartitioningTimeGranularity)
]
