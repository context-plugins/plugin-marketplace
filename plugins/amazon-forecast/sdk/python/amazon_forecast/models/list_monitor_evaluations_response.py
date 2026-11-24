from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .predictor_monitor_evaluation import PredictorMonitorEvaluation, PredictorMonitorEvaluationDict


class ListMonitorEvaluationsResponse(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the
    token in the next request. Tokens expire after 24 hours."""

    predictor_monitor_evaluations: Optional[list[PredictorMonitorEvaluation]] = Field(
        default=UNSET, alias="PredictorMonitorEvaluations"
    )
    """The monitoring results and predictor events collected by the monitor resource during different windows of time.
    For information about monitoring see Viewing Monitoring Results. For more information about retrieving monitoring
    results see Viewing Monitoring Results."""


class ListMonitorEvaluationsResponseDict(TypedDict):
    next_token: NotRequired[str]
    predictor_monitor_evaluations: NotRequired[list[PredictorMonitorEvaluationDict]]
