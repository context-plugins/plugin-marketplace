from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonForecastServiceExplainabilityApi(str, Enum):
    AMAZON_FORECAST_DESCRIBE_EXPLAINABILITY = "AmazonForecast.DescribeExplainability"

    __str__ = str.__str__


XAmzTarget2AmazonForecastServiceExplainabilityApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonForecastServiceExplainabilityApi | str,
    open_enum_validator(XAmzTarget2AmazonForecastServiceExplainabilityApi),
]
