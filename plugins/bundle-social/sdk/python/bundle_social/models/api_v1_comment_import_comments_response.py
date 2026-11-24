from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item_bundle_social_comment_api import ItemBundleSocialCommentApi, ItemBundleSocialCommentApiDict


class ApiV1CommentImportCommentsResponse(SdkBaseModel):
    items: list[ItemBundleSocialCommentApi]
    total: float


class ApiV1CommentImportCommentsResponseDict(TypedDict):
    items: list[ItemBundleSocialCommentApiDict]
    total: float
