from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonForecastServiceMonitorApi(str, Enum):
    AMAZON_FORECAST_DESCRIBE_MONITOR = "AmazonForecast.DescribeMonitor"

    __str__ = str.__str__


XAmzTarget2AmazonForecastServiceMonitorApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonForecastServiceMonitorApi | str, open_enum_validator(XAmzTarget2AmazonForecastServiceMonitorApi)
]
