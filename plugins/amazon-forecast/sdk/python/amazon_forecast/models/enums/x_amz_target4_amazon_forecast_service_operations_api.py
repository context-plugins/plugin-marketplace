from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AmazonForecastServiceOperationsApi(str, Enum):
    AMAZON_FORECAST_GET_ACCURACY_METRICS = "AmazonForecast.GetAccuracyMetrics"

    __str__ = str.__str__


XAmzTarget4AmazonForecastServiceOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AmazonForecastServiceOperationsApi | str,
    open_enum_validator(XAmzTarget4AmazonForecastServiceOperationsApi),
]
