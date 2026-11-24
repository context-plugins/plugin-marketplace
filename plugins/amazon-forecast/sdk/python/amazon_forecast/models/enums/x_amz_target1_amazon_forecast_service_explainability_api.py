from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonForecastServiceExplainabilityApi(str, Enum):
    AMAZON_FORECAST_DELETE_EXPLAINABILITY = "AmazonForecast.DeleteExplainability"

    __str__ = str.__str__


XAmzTarget1AmazonForecastServiceExplainabilityApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonForecastServiceExplainabilityApi | str,
    open_enum_validator(XAmzTarget1AmazonForecastServiceExplainabilityApi),
]
