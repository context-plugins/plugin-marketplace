from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonForecastServiceForecastsApi(str, Enum):
    AMAZON_FORECAST_DELETE_FORECAST = "AmazonForecast.DeleteForecast"

    __str__ = str.__str__


XAmzTarget1AmazonForecastServiceForecastsApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonForecastServiceForecastsApi | str,
    open_enum_validator(XAmzTarget1AmazonForecastServiceForecastsApi),
]
