from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_score_component_recommendation import (
    GoogleCloudApigeeV1ScoreComponentRecommendation,
    GoogleCloudApigeeV1ScoreComponentRecommendationDict,
)


class GoogleCloudApigeeV1ScoreComponent(SdkBaseModel):
    """Component is an individual security element that is scored."""

    recommendations: Optional[list[GoogleCloudApigeeV1ScoreComponentRecommendation]] = UNSET
    """List of recommendations to improve API security."""

    score_path: Optional[str] = Field(default=UNSET, alias="scorePath")
    """Path of the component. Example: /org@myorg/envgroup@myenvgroup/proxies/proxy@myproxy"""

    calculate_time: Optional[str] = Field(default=UNSET, alias="calculateTime")
    """Time when score was calculated."""

    score: Optional[int] = UNSET
    """Score for the component."""

    data_capture_time: Optional[str] = Field(default=UNSET, alias="dataCaptureTime")
    """Time in the requested time period when data was last captured to compute the score."""

    drilldown_paths: Optional[list[str]] = Field(default=UNSET, alias="drilldownPaths")
    """List of paths for next components."""


class GoogleCloudApigeeV1ScoreComponentDict(TypedDict):
    recommendations: NotRequired[list[GoogleCloudApigeeV1ScoreComponentRecommendationDict]]
    score_path: NotRequired[str]
    calculate_time: NotRequired[str]
    score: NotRequired[int]
    data_capture_time: NotRequired[str]
    drilldown_paths: NotRequired[list[str]]
