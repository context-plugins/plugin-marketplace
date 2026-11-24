from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext(SdkBaseModel):
    """Action context are all the relevant details for the action."""

    documentation_link: Optional[str] = Field(default=UNSET, alias="documentationLink")
    """Documentation link for the action."""


class GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContextDict(TypedDict):
    documentation_link: NotRequired[str]
