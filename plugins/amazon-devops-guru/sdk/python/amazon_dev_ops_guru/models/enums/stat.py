from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Stat(str, Enum):
    """The type of statistic associated with the CloudWatch metric. For more information, see Statistics in the Amazon
    CloudWatch User Guide."""

    SUM = "Sum"
    AVERAGE = "Average"
    SAMPLE_COUNT = "SampleCount"
    MINIMUM = "Minimum"
    MAXIMUM = "Maximum"
    P99 = "p99"
    P90 = "p90"
    P50 = "p50"

    __str__ = str.__str__


StatOrStr: TypeAlias = Annotated[Stat | str, open_enum_validator(Stat)]
