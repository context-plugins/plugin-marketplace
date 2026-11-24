from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .action import Action, ActionDict
from .time_series_condition import TimeSeriesCondition, TimeSeriesConditionDict


class TimeSeriesTransformation(SdkBaseModel):
    action: Optional[Action] = Field(default=UNSET, alias="Action")
    time_series_conditions: Optional[list[TimeSeriesCondition]] = Field(default=UNSET, alias="TimeSeriesConditions")
    """An array of conditions that define which members of the related time series are transformed."""


class TimeSeriesTransformationDict(TypedDict):
    action: NotRequired[ActionDict]
    time_series_conditions: NotRequired[list[TimeSeriesConditionDict]]
