from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonForecastServiceResourceApi(str, Enum):
    AMAZON_FORECAST_UNTAG_RESOURCE = "AmazonForecast.UntagResource"

    __str__ = str.__str__


XAmzTarget2AmazonForecastServiceResourceApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonForecastServiceResourceApi | str, open_enum_validator(XAmzTarget2AmazonForecastServiceResourceApi)
]
