from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonForecastServiceMonitorApi(str, Enum):
    AMAZON_FORECAST_DELETE_MONITOR = "AmazonForecast.DeleteMonitor"

    __str__ = str.__str__


XAmzTarget1AmazonForecastServiceMonitorApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonForecastServiceMonitorApi | str, open_enum_validator(XAmzTarget1AmazonForecastServiceMonitorApi)
]
