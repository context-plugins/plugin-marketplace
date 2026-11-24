from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonForecastServiceWhatIfForecastApi(str, Enum):
    AMAZON_FORECAST_DESCRIBE_WHAT_IF_FORECAST = "AmazonForecast.DescribeWhatIfForecast"

    __str__ = str.__str__


XAmzTarget2AmazonForecastServiceWhatIfForecastApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonForecastServiceWhatIfForecastApi | str,
    open_enum_validator(XAmzTarget2AmazonForecastServiceWhatIfForecastApi),
]
