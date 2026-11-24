from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonForecastServiceForecastsApi(str, Enum):
    AMAZON_FORECAST_DESCRIBE_FORECAST = "AmazonForecast.DescribeForecast"

    __str__ = str.__str__


XAmzTarget2AmazonForecastServiceForecastsApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonForecastServiceForecastsApi | str,
    open_enum_validator(XAmzTarget2AmazonForecastServiceForecastsApi),
]
