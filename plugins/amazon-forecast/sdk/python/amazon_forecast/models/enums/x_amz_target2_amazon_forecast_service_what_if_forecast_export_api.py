from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi(str, Enum):
    AMAZON_FORECAST_DESCRIBE_WHAT_IF_FORECAST_EXPORT = "AmazonForecast.DescribeWhatIfForecastExport"

    __str__ = str.__str__


XAmzTarget2AmazonForecastServiceWhatIfForecastExportApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi | str,
    open_enum_validator(XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi),
]
