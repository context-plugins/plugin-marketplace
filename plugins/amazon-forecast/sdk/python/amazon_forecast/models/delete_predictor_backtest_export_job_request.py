from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeletePredictorBacktestExportJobRequest(SdkBaseModel):
    predictor_backtest_export_job_arn: str = Field(alias="PredictorBacktestExportJobArn")
    """The Amazon Resource Name (ARN) of the predictor backtest export job to delete."""


class DeletePredictorBacktestExportJobRequestDict(TypedDict):
    predictor_backtest_export_job_arn: str
