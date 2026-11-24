from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .predictor_summary import PredictorSummary, PredictorSummaryDict


class ListPredictorsResponse(SdkBaseModel):
    predictors: Optional[list[PredictorSummary]] = Field(default=UNSET, alias="Predictors")
    """An array of objects that summarize each predictor's properties."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the
    token in the next request."""


class ListPredictorsResponseDict(TypedDict):
    predictors: NotRequired[list[PredictorSummaryDict]]
    next_token: NotRequired[str]
