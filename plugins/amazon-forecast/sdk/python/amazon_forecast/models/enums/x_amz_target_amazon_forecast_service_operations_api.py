from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonForecastServiceOperationsApi(str, Enum):
    AMAZON_FORECAST_RESUME_RESOURCE = "AmazonForecast.ResumeResource"

    __str__ = str.__str__


XAmzTargetAmazonForecastServiceOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonForecastServiceOperationsApi | str,
    open_enum_validator(XAmzTargetAmazonForecastServiceOperationsApi),
]
