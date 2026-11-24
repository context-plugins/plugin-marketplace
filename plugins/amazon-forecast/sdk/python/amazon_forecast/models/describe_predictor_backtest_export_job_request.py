from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribePredictorBacktestExportJobRequest(SdkBaseModel):
    predictor_backtest_export_job_arn: str = Field(alias="PredictorBacktestExportJobArn")
    """The Amazon Resource Name (ARN) of the predictor backtest export job."""


class DescribePredictorBacktestExportJobRequestDict(TypedDict):
    predictor_backtest_export_job_arn: str
