from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict
from .time_series_selector import TimeSeriesSelector, TimeSeriesSelectorDict


class CreateWhatIfAnalysisRequest(SdkBaseModel):
    what_if_analysis_name: str = Field(alias="WhatIfAnalysisName")
    """The name of the what-if analysis. Each name must be unique."""

    forecast_arn: str = Field(alias="ForecastArn")
    """The Amazon Resource Name (ARN) of the baseline forecast."""

    time_series_selector: Optional[TimeSeriesSelector] = Field(default=UNSET, alias="TimeSeriesSelector")
    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """A list of tags to apply to the what if forecast."""


class CreateWhatIfAnalysisRequestDict(TypedDict):
    what_if_analysis_name: str
    forecast_arn: str
    time_series_selector: NotRequired[TimeSeriesSelectorDict]
    tags: NotRequired[list[TagModelDict]]
