from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscFacebookRecommendationsCommentsReplyRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    comment: str


class ApiV1MiscFacebookRecommendationsCommentsReplyRequestDict(TypedDict):
    team_id: str
    comment: str
