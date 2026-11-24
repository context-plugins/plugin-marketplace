from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .predictor_execution import PredictorExecution, PredictorExecutionDict


class PredictorExecutionDetails(SdkBaseModel):
    predictor_executions: Optional[list[PredictorExecution]] = Field(default=UNSET, alias="PredictorExecutions")
    """An array of the backtests performed to evaluate the accuracy of the predictor against a particular algorithm. The
    NumberOfBacktestWindows from the object determines the number of windows in the array."""


class PredictorExecutionDetailsDict(TypedDict):
    predictor_executions: NotRequired[list[PredictorExecutionDict]]
