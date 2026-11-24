from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonForecastServiceForecastsApi(str, Enum):
    AMAZON_FORECAST_LIST_FORECASTS = "AmazonForecast.ListForecasts"

    __str__ = str.__str__


XAmzTarget3AmazonForecastServiceForecastsApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonForecastServiceForecastsApi | str,
    open_enum_validator(XAmzTarget3AmazonForecastServiceForecastsApi),
]
