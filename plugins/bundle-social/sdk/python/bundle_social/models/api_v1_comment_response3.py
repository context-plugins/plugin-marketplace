from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item2_bundle_social_comment_api import Item2BundleSocialCommentApi, Item2BundleSocialCommentApiDict


class ApiV1CommentResponse3(SdkBaseModel):
    items: list[Item2BundleSocialCommentApi]
    total: float


class ApiV1CommentResponse3Dict(TypedDict):
    items: list[Item2BundleSocialCommentApiDict]
    total: float
