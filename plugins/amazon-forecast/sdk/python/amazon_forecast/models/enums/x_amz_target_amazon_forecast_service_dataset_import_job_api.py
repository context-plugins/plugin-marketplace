from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonForecastServiceDatasetImportJobApi(str, Enum):
    AMAZON_FORECAST_CREATE_DATASET_IMPORT_JOB = "AmazonForecast.CreateDatasetImportJob"

    __str__ = str.__str__


XAmzTargetAmazonForecastServiceDatasetImportJobApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonForecastServiceDatasetImportJobApi | str,
    open_enum_validator(XAmzTargetAmazonForecastServiceDatasetImportJobApi),
]
