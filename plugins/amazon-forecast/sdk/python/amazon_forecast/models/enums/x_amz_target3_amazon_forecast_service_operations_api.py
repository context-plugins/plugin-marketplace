from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonForecastServiceOperationsApi(str, Enum):
    AMAZON_FORECAST_DELETE_RESOURCE_TREE = "AmazonForecast.DeleteResourceTree"

    __str__ = str.__str__


XAmzTarget3AmazonForecastServiceOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonForecastServiceOperationsApi | str,
    open_enum_validator(XAmzTarget3AmazonForecastServiceOperationsApi),
]
