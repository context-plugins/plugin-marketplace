from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonForecastServicePredictorsApi(str, Enum):
    AMAZON_FORECAST_LIST_PREDICTORS = "AmazonForecast.ListPredictors"

    __str__ = str.__str__


XAmzTarget3AmazonForecastServicePredictorsApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonForecastServicePredictorsApi | str,
    open_enum_validator(XAmzTarget3AmazonForecastServicePredictorsApi),
]
