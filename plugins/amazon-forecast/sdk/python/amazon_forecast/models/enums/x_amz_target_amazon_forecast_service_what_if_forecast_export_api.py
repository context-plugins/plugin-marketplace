from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonForecastServiceWhatIfForecastExportApi(str, Enum):
    AMAZON_FORECAST_CREATE_WHAT_IF_FORECAST_EXPORT = "AmazonForecast.CreateWhatIfForecastExport"

    __str__ = str.__str__


XAmzTargetAmazonForecastServiceWhatIfForecastExportApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonForecastServiceWhatIfForecastExportApi | str,
    open_enum_validator(XAmzTargetAmazonForecastServiceWhatIfForecastExportApi),
]
