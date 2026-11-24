from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonForecastServiceWhatIfForecastApi(str, Enum):
    AMAZON_FORECAST_LIST_WHAT_IF_FORECASTS = "AmazonForecast.ListWhatIfForecasts"

    __str__ = str.__str__


XAmzTarget3AmazonForecastServiceWhatIfForecastApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonForecastServiceWhatIfForecastApi | str,
    open_enum_validator(XAmzTarget3AmazonForecastServiceWhatIfForecastApi),
]
