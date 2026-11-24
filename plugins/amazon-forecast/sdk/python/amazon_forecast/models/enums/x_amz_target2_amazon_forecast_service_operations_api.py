from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonForecastServiceOperationsApi(str, Enum):
    AMAZON_FORECAST_DESCRIBE_AUTO_PREDICTOR = "AmazonForecast.DescribeAutoPredictor"

    __str__ = str.__str__


XAmzTarget2AmazonForecastServiceOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonForecastServiceOperationsApi | str,
    open_enum_validator(XAmzTarget2AmazonForecastServiceOperationsApi),
]
