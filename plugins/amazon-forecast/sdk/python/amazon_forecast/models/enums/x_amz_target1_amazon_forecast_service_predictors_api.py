from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonForecastServicePredictorsApi(str, Enum):
    AMAZON_FORECAST_DELETE_PREDICTOR = "AmazonForecast.DeletePredictor"

    __str__ = str.__str__


XAmzTarget1AmazonForecastServicePredictorsApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonForecastServicePredictorsApi | str,
    open_enum_validator(XAmzTarget1AmazonForecastServicePredictorsApi),
]
