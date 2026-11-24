from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi(str, Enum):
    AMAZON_FORECAST_CREATE_PREDICTOR_BACKTEST_EXPORT_JOB = "AmazonForecast.CreatePredictorBacktestExportJob"

    __str__ = str.__str__


XAmzTargetAmazonForecastServicePredictorBacktestExportJobApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi | str,
    open_enum_validator(XAmzTargetAmazonForecastServicePredictorBacktestExportJobApi),
]
