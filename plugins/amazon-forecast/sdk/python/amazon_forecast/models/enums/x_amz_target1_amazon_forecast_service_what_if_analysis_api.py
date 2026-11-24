from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi(str, Enum):
    AMAZON_FORECAST_DELETE_WHAT_IF_ANALYSIS = "AmazonForecast.DeleteWhatIfAnalysis"

    __str__ = str.__str__


XAmzTarget1AmazonForecastServiceWhatIfAnalysisApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi | str,
    open_enum_validator(XAmzTarget1AmazonForecastServiceWhatIfAnalysisApi),
]
