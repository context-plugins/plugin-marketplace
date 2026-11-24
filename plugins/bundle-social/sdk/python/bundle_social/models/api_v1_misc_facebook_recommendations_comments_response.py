from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .comment import Comment, CommentDict


class ApiV1MiscFacebookRecommendationsCommentsResponse(SdkBaseModel):
    comments: list[Comment]
    total: float


class ApiV1MiscFacebookRecommendationsCommentsResponseDict(TypedDict):
    comments: list[CommentDict]
    total: float
