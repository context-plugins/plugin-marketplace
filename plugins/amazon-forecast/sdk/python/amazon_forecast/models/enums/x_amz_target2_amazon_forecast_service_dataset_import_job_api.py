from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonForecastServiceDatasetImportJobApi(str, Enum):
    AMAZON_FORECAST_DESCRIBE_DATASET_IMPORT_JOB = "AmazonForecast.DescribeDatasetImportJob"

    __str__ = str.__str__


XAmzTarget2AmazonForecastServiceDatasetImportJobApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonForecastServiceDatasetImportJobApi | str,
    open_enum_validator(XAmzTarget2AmazonForecastServiceDatasetImportJobApi),
]
