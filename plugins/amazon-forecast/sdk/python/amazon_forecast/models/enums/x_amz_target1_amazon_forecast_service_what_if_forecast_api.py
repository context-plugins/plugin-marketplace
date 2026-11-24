from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonForecastServiceWhatIfForecastApi(str, Enum):
    AMAZON_FORECAST_DELETE_WHAT_IF_FORECAST = "AmazonForecast.DeleteWhatIfForecast"

    __str__ = str.__str__


XAmzTarget1AmazonForecastServiceWhatIfForecastApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonForecastServiceWhatIfForecastApi | str,
    open_enum_validator(XAmzTarget1AmazonForecastServiceWhatIfForecastApi),
]
