from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonForecastServiceDatasetImportJobApi(str, Enum):
    AMAZON_FORECAST_LIST_DATASET_IMPORT_JOBS = "AmazonForecast.ListDatasetImportJobs"

    __str__ = str.__str__


XAmzTarget3AmazonForecastServiceDatasetImportJobApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonForecastServiceDatasetImportJobApi | str,
    open_enum_validator(XAmzTarget3AmazonForecastServiceDatasetImportJobApi),
]
