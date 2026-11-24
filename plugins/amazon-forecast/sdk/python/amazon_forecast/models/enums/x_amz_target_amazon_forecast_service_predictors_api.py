from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonForecastServicePredictorsApi(str, Enum):
    AMAZON_FORECAST_CREATE_PREDICTOR = "AmazonForecast.CreatePredictor"

    __str__ = str.__str__


XAmzTargetAmazonForecastServicePredictorsApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonForecastServicePredictorsApi | str,
    open_enum_validator(XAmzTargetAmazonForecastServicePredictorsApi),
]
