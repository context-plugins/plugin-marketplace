from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonForecastServiceResourceApi(str, Enum):
    AMAZON_FORECAST_TAG_RESOURCE = "AmazonForecast.TagResource"

    __str__ = str.__str__


XAmzTarget1AmazonForecastServiceResourceApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonForecastServiceResourceApi | str, open_enum_validator(XAmzTarget1AmazonForecastServiceResourceApi)
]
