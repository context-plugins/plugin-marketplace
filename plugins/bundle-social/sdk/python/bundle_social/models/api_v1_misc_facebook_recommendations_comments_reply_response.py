from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscFacebookRecommendationsCommentsReplyResponse(SdkBaseModel):
    id: str


class ApiV1MiscFacebookRecommendationsCommentsReplyResponseDict(TypedDict):
    id: str
