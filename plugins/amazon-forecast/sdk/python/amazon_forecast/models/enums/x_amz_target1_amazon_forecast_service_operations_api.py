from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonForecastServiceOperationsApi(str, Enum):
    AMAZON_FORECAST_CREATE_AUTO_PREDICTOR = "AmazonForecast.CreateAutoPredictor"

    __str__ = str.__str__


XAmzTarget1AmazonForecastServiceOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonForecastServiceOperationsApi | str,
    open_enum_validator(XAmzTarget1AmazonForecastServiceOperationsApi),
]
