from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .recommendation_related_cloud_watch_metrics_source_detail import (
    RecommendationRelatedCloudWatchMetricsSourceDetail,
    RecommendationRelatedCloudWatchMetricsSourceDetailDict,
)


class RecommendationRelatedAnomalySourceDetail(SdkBaseModel):
    cloud_watch_metrics: Optional[list[RecommendationRelatedCloudWatchMetricsSourceDetail]] = Field(
        default=UNSET, alias="CloudWatchMetrics"
    )
    """An array of CloudWatchMetricsDetail objects that contains information about the analyzed metrics that displayed
    anomalous behavior."""


class RecommendationRelatedAnomalySourceDetailDict(TypedDict):
    cloud_watch_metrics: NotRequired[list[RecommendationRelatedCloudWatchMetricsSourceDetailDict]]
