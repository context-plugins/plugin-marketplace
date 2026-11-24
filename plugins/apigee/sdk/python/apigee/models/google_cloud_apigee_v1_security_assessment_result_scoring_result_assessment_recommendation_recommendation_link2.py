from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationLink2(SdkBaseModel):
    """The link for the recommendation."""

    uri: Optional[str] = UNSET
    """The link itself."""

    text: Optional[str] = UNSET
    """The text of the url. (ie: "Learn more")"""


class GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationLink2Dict(
    TypedDict
):
    uri: NotRequired[str]
    text: NotRequired[str]
