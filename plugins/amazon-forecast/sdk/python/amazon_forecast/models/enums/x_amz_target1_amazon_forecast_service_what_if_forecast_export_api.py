from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi(str, Enum):
    AMAZON_FORECAST_DELETE_WHAT_IF_FORECAST_EXPORT = "AmazonForecast.DeleteWhatIfForecastExport"

    __str__ = str.__str__


XAmzTarget1AmazonForecastServiceWhatIfForecastExportApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi | str,
    open_enum_validator(XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi),
]
