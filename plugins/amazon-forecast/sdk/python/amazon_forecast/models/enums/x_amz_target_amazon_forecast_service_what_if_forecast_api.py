from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonForecastServiceWhatIfForecastApi(str, Enum):
    AMAZON_FORECAST_CREATE_WHAT_IF_FORECAST = "AmazonForecast.CreateWhatIfForecast"

    __str__ = str.__str__


XAmzTargetAmazonForecastServiceWhatIfForecastApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonForecastServiceWhatIfForecastApi | str,
    open_enum_validator(XAmzTargetAmazonForecastServiceWhatIfForecastApi),
]
