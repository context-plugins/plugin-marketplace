from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .relative_aggregation_duration import RelativeAggregationDuration, RelativeAggregationDurationDict


class UtteranceAggregationDuration(SdkBaseModel):
    relative_aggregation_duration: RelativeAggregationDuration = Field(alias="relativeAggregationDuration")


class UtteranceAggregationDurationDict(TypedDict):
    relative_aggregation_duration: RelativeAggregationDurationDict
