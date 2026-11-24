from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .tag_model import TagModel, TagModelDict
from .time_series_replacements_data_source import TimeSeriesReplacementsDataSource, TimeSeriesReplacementsDataSourceDict
from .time_series_transformation import TimeSeriesTransformation, TimeSeriesTransformationDict


class CreateWhatIfForecastRequest(SdkBaseModel):
    what_if_forecast_name: str = Field(alias="WhatIfForecastName")
    """The name of the what-if forecast. Names must be unique within each what-if analysis."""

    what_if_analysis_arn: str = Field(alias="WhatIfAnalysisArn")
    """The Amazon Resource Name (ARN) of the what-if analysis."""

    time_series_transformations: Optional[list[TimeSeriesTransformation]] = Field(
        default=UNSET, alias="TimeSeriesTransformations"
    )
    """The transformations that are applied to the baseline time series. Each transformation contains an action and a
    set of conditions. An action is applied only when all conditions are met. If no conditions are provided, the action
    is applied to all items."""

    time_series_replacements_data_source: Optional[TimeSeriesReplacementsDataSource] = Field(
        default=UNSET, alias="TimeSeriesReplacementsDataSource"
    )
    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """A list of tags to apply to the what if forecast."""


class CreateWhatIfForecastRequestDict(TypedDict):
    what_if_forecast_name: str
    what_if_analysis_arn: str
    time_series_transformations: NotRequired[list[TimeSeriesTransformationDict]]
    time_series_replacements_data_source: NotRequired[TimeSeriesReplacementsDataSourceDict]
    tags: NotRequired[list[TagModelDict]]
