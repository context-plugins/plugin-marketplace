from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonForecastServiceDatasetsApi(str, Enum):
    AMAZON_FORECAST_DELETE_DATASET = "AmazonForecast.DeleteDataset"

    __str__ = str.__str__


XAmzTarget1AmazonForecastServiceDatasetsApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonForecastServiceDatasetsApi | str, open_enum_validator(XAmzTarget1AmazonForecastServiceDatasetsApi)
]
