from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi(str, Enum):
    AMAZON_FORECAST_DESCRIBE_WHAT_IF_ANALYSIS = "AmazonForecast.DescribeWhatIfAnalysis"

    __str__ = str.__str__


XAmzTarget2AmazonForecastServiceWhatIfAnalysisApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi | str,
    open_enum_validator(XAmzTarget2AmazonForecastServiceWhatIfAnalysisApi),
]
