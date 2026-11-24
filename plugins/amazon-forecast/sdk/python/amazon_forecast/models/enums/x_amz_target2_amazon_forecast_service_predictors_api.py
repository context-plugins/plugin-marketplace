from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonForecastServicePredictorsApi(str, Enum):
    AMAZON_FORECAST_DESCRIBE_PREDICTOR = "AmazonForecast.DescribePredictor"

    __str__ = str.__str__


XAmzTarget2AmazonForecastServicePredictorsApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonForecastServicePredictorsApi | str,
    open_enum_validator(XAmzTarget2AmazonForecastServicePredictorsApi),
]
