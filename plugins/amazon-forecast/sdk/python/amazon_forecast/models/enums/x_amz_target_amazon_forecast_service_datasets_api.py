from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonForecastServiceDatasetsApi(str, Enum):
    AMAZON_FORECAST_CREATE_DATASET = "AmazonForecast.CreateDataset"

    __str__ = str.__str__


XAmzTargetAmazonForecastServiceDatasetsApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonForecastServiceDatasetsApi | str, open_enum_validator(XAmzTargetAmazonForecastServiceDatasetsApi)
]
