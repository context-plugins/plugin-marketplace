from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonForecastServiceForecastsApi(str, Enum):
    AMAZON_FORECAST_CREATE_FORECAST = "AmazonForecast.CreateForecast"

    __str__ = str.__str__


XAmzTargetAmazonForecastServiceForecastsApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonForecastServiceForecastsApi | str, open_enum_validator(XAmzTargetAmazonForecastServiceForecastsApi)
]
