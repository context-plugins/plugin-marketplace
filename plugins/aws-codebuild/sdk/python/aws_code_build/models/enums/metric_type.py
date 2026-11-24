from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MetricType(str, Enum):
    """The metric type to determine auto-scaling."""

    FLEET_UTILIZATION_RATE = "FLEET_UTILIZATION_RATE"

    __str__ = str.__str__


MetricTypeOrStr: TypeAlias = Annotated[MetricType | str, open_enum_validator(MetricType)]
