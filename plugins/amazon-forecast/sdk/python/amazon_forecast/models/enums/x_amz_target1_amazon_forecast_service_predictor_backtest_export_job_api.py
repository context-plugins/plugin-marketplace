from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi(str, Enum):
    AMAZON_FORECAST_DELETE_PREDICTOR_BACKTEST_EXPORT_JOB = "AmazonForecast.DeletePredictorBacktestExportJob"

    __str__ = str.__str__


XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi | str,
    open_enum_validator(XAmzTarget1AmazonForecastServicePredictorBacktestExportJobApi),
]
