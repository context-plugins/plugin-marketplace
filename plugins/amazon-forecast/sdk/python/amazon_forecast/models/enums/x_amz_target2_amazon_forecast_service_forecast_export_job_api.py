from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonForecastServiceForecastExportJobApi(str, Enum):
    AMAZON_FORECAST_DESCRIBE_FORECAST_EXPORT_JOB = "AmazonForecast.DescribeForecastExportJob"

    __str__ = str.__str__


XAmzTarget2AmazonForecastServiceForecastExportJobApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonForecastServiceForecastExportJobApi | str,
    open_enum_validator(XAmzTarget2AmazonForecastServiceForecastExportJobApi),
]
