from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi(str, Enum):
    AMAZON_FORECAST_LIST_WHAT_IF_FORECAST_EXPORTS = "AmazonForecast.ListWhatIfForecastExports"

    __str__ = str.__str__


XAmzTarget3AmazonForecastServiceWhatIfForecastExportApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi | str,
    open_enum_validator(XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi),
]
