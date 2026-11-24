from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonForecastServiceForecastExportJobApi(str, Enum):
    AMAZON_FORECAST_DELETE_FORECAST_EXPORT_JOB = "AmazonForecast.DeleteForecastExportJob"

    __str__ = str.__str__


XAmzTarget1AmazonForecastServiceForecastExportJobApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonForecastServiceForecastExportJobApi | str,
    open_enum_validator(XAmzTarget1AmazonForecastServiceForecastExportJobApi),
]
