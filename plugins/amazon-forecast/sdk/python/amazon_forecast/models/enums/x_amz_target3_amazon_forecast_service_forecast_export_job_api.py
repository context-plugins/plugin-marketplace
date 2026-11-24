from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonForecastServiceForecastExportJobApi(str, Enum):
    AMAZON_FORECAST_LIST_FORECAST_EXPORT_JOBS = "AmazonForecast.ListForecastExportJobs"

    __str__ = str.__str__


XAmzTarget3AmazonForecastServiceForecastExportJobApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonForecastServiceForecastExportJobApi | str,
    open_enum_validator(XAmzTarget3AmazonForecastServiceForecastExportJobApi),
]
