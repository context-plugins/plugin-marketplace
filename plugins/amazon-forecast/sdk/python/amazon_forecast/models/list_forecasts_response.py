from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .forecast_summary import ForecastSummary, ForecastSummaryDict


class ListForecastsResponse(SdkBaseModel):
    forecasts: Optional[list[ForecastSummary]] = Field(default=UNSET, alias="Forecasts")
    """An array of objects that summarize each forecast's properties."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the
    token in the next request."""


class ListForecastsResponseDict(TypedDict):
    forecasts: NotRequired[list[ForecastSummaryDict]]
    next_token: NotRequired[str]
