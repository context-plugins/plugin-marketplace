from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi(str, Enum):
    AMAZON_FORECAST_LIST_PREDICTOR_BACKTEST_EXPORT_JOBS = "AmazonForecast.ListPredictorBacktestExportJobs"

    __str__ = str.__str__


XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi | str,
    open_enum_validator(XAmzTarget3AmazonForecastServicePredictorBacktestExportJobApi),
]
