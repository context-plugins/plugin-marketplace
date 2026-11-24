from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonForecastServiceMonitorApi(str, Enum):
    AMAZON_FORECAST_LIST_MONITORS = "AmazonForecast.ListMonitors"

    __str__ = str.__str__


XAmzTarget3AmazonForecastServiceMonitorApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonForecastServiceMonitorApi | str, open_enum_validator(XAmzTarget3AmazonForecastServiceMonitorApi)
]
