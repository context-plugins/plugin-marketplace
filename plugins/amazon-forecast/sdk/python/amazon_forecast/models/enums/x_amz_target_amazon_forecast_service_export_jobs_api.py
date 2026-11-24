from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonForecastServiceExportJobsApi(str, Enum):
    AMAZON_FORECAST_CREATE_FORECAST_EXPORT_JOB = "AmazonForecast.CreateForecastExportJob"

    __str__ = str.__str__


XAmzTargetAmazonForecastServiceExportJobsApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonForecastServiceExportJobsApi | str,
    open_enum_validator(XAmzTargetAmazonForecastServiceExportJobsApi),
]
