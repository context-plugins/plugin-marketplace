from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationLink(SdkBaseModel):
    """The format for a link in the recommendation."""

    uri: Optional[str] = UNSET
    """The link itself."""

    text: Optional[str] = UNSET
    """The text of the url. (ie: "Learn more")"""


class GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationLinkDict(TypedDict):
    uri: NotRequired[str]
    text: NotRequired[str]
