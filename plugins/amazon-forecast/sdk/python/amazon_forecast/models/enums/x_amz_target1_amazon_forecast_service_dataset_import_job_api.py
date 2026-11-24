from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonForecastServiceDatasetImportJobApi(str, Enum):
    AMAZON_FORECAST_DELETE_DATASET_IMPORT_JOB = "AmazonForecast.DeleteDatasetImportJob"

    __str__ = str.__str__


XAmzTarget1AmazonForecastServiceDatasetImportJobApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonForecastServiceDatasetImportJobApi | str,
    open_enum_validator(XAmzTarget1AmazonForecastServiceDatasetImportJobApi),
]
