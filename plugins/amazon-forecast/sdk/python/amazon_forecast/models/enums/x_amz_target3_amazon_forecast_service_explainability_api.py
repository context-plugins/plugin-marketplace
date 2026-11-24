from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonForecastServiceExplainabilityApi(str, Enum):
    AMAZON_FORECAST_LIST_EXPLAINABILITIES = "AmazonForecast.ListExplainabilities"

    __str__ = str.__str__


XAmzTarget3AmazonForecastServiceExplainabilityApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonForecastServiceExplainabilityApi | str,
    open_enum_validator(XAmzTarget3AmazonForecastServiceExplainabilityApi),
]
