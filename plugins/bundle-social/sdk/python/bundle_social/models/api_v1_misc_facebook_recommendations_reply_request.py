from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscFacebookRecommendationsReplyRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    comment: str


class ApiV1MiscFacebookRecommendationsReplyRequestDict(TypedDict):
    team_id: str
    comment: str
