from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_score_component_recommendation_action_action_context2 import (
    GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext2,
    GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext2Dict,
)


class GoogleCloudApigeeV1ScoreComponentRecommendationAction(SdkBaseModel):
    """Action to improve security score."""

    description: Optional[str] = UNSET
    """Description of the action."""

    action_context: Optional[GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext2] = Field(
        default=UNSET, alias="actionContext"
    )
    """Action context for the action."""


class GoogleCloudApigeeV1ScoreComponentRecommendationActionDict(TypedDict):
    description: NotRequired[str]
    action_context: NotRequired[GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext2Dict]
