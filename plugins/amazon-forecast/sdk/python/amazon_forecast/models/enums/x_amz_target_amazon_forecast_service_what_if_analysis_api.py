from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonForecastServiceWhatIfAnalysisApi(str, Enum):
    AMAZON_FORECAST_CREATE_WHAT_IF_ANALYSIS = "AmazonForecast.CreateWhatIfAnalysis"

    __str__ = str.__str__


XAmzTargetAmazonForecastServiceWhatIfAnalysisApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonForecastServiceWhatIfAnalysisApi | str,
    open_enum_validator(XAmzTargetAmazonForecastServiceWhatIfAnalysisApi),
]
