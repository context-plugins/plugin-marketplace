from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonForecastServiceResourceApi(str, Enum):
    AMAZON_FORECAST_STOP_RESOURCE = "AmazonForecast.StopResource"

    __str__ = str.__str__


XAmzTargetAmazonForecastServiceResourceApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonForecastServiceResourceApi | str, open_enum_validator(XAmzTargetAmazonForecastServiceResourceApi)
]
