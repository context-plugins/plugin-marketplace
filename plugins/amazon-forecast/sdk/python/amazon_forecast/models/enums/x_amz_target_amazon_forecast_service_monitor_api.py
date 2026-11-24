from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonForecastServiceMonitorApi(str, Enum):
    AMAZON_FORECAST_CREATE_MONITOR = "AmazonForecast.CreateMonitor"

    __str__ = str.__str__


XAmzTargetAmazonForecastServiceMonitorApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonForecastServiceMonitorApi | str, open_enum_validator(XAmzTargetAmazonForecastServiceMonitorApi)
]
