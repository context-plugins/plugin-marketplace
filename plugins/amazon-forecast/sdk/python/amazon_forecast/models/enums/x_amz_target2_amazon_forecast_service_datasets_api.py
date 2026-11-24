from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonForecastServiceDatasetsApi(str, Enum):
    AMAZON_FORECAST_DESCRIBE_DATASET = "AmazonForecast.DescribeDataset"

    __str__ = str.__str__


XAmzTarget2AmazonForecastServiceDatasetsApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonForecastServiceDatasetsApi | str, open_enum_validator(XAmzTarget2AmazonForecastServiceDatasetsApi)
]
