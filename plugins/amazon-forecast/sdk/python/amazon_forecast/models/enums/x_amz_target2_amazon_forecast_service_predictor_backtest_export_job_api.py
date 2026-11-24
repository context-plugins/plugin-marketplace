from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi(str, Enum):
    AMAZON_FORECAST_DESCRIBE_PREDICTOR_BACKTEST_EXPORT_JOB = "AmazonForecast.DescribePredictorBacktestExportJob"

    __str__ = str.__str__


XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi | str,
    open_enum_validator(XAmzTarget2AmazonForecastServicePredictorBacktestExportJobApi),
]
