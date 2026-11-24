from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_score import GoogleCloudApigeeV1Score, GoogleCloudApigeeV1ScoreDict


class GoogleCloudApigeeV1ComputeEnvironmentScoresResponse(SdkBaseModel):
    """Response for ComputeEnvironmentScores."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A page token, received from a previous ``ComputeScore`` call. Provide this to retrieve the subsequent page."""

    scores: Optional[list[GoogleCloudApigeeV1Score]] = UNSET
    """List of scores. One score per day."""


class GoogleCloudApigeeV1ComputeEnvironmentScoresResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    scores: NotRequired[list[GoogleCloudApigeeV1ScoreDict]]
