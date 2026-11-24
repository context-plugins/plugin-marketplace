from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonForecastServiceDatasetsApi(str, Enum):
    AMAZON_FORECAST_LIST_DATASETS = "AmazonForecast.ListDatasets"

    __str__ = str.__str__


XAmzTarget3AmazonForecastServiceDatasetsApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonForecastServiceDatasetsApi | str, open_enum_validator(XAmzTarget3AmazonForecastServiceDatasetsApi)
]
