from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonForecastServiceExplainabilityApi(str, Enum):
    AMAZON_FORECAST_CREATE_EXPLAINABILITY = "AmazonForecast.CreateExplainability"

    __str__ = str.__str__


XAmzTargetAmazonForecastServiceExplainabilityApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonForecastServiceExplainabilityApi | str,
    open_enum_validator(XAmzTargetAmazonForecastServiceExplainabilityApi),
]
