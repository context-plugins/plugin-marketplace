from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RecommendationRelatedCloudWatchMetricsSourceDetail(SdkBaseModel):
    metric_name: Optional[str] = Field(default=UNSET, alias="MetricName")
    """The name of the CloudWatch metric."""

    namespace: Optional[str] = Field(default=UNSET, alias="Namespace")
    """The namespace of the CloudWatch metric. A namespace is a container for CloudWatch metrics."""


class RecommendationRelatedCloudWatchMetricsSourceDetailDict(TypedDict):
    metric_name: NotRequired[str]
    namespace: NotRequired[str]
