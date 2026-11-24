from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreatePredictorBacktestExportJobResponse(SdkBaseModel):
    predictor_backtest_export_job_arn: Optional[str] = Field(default=UNSET, alias="PredictorBacktestExportJobArn")
    """The Amazon Resource Name (ARN) of the predictor backtest export job that you want to export."""


class CreatePredictorBacktestExportJobResponseDict(TypedDict):
    predictor_backtest_export_job_arn: NotRequired[str]
