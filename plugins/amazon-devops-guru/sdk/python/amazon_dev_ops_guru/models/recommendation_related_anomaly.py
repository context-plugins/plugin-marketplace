from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .recommendation_related_anomaly_resource import (
    RecommendationRelatedAnomalyResource,
    RecommendationRelatedAnomalyResourceDict,
)
from .recommendation_related_anomaly_source_detail import (
    RecommendationRelatedAnomalySourceDetail,
    RecommendationRelatedAnomalySourceDetailDict,
)


class RecommendationRelatedAnomaly(SdkBaseModel):
    resources: Optional[list[RecommendationRelatedAnomalyResource]] = Field(default=UNSET, alias="Resources")
    """An array of objects that represent resources in which DevOps Guru detected anomalous behavior. Each object
    contains the name and type of the resource."""

    source_details: Optional[list[RecommendationRelatedAnomalySourceDetail]] = Field(
        default=UNSET, alias="SourceDetails"
    )
    """Information about where the anomalous behavior related the recommendation was found. For example, details in
    Amazon CloudWatch metrics."""

    anomaly_id: Optional[str] = Field(default=UNSET, alias="AnomalyId")
    """The ID of an anomaly that generated the insight with this recommendation."""


class RecommendationRelatedAnomalyDict(TypedDict):
    resources: NotRequired[list[RecommendationRelatedAnomalyResourceDict]]
    source_details: NotRequired[list[RecommendationRelatedAnomalySourceDetailDict]]
    anomaly_id: NotRequired[str]
