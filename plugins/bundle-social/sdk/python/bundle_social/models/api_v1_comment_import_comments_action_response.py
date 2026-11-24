from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item_bundle_social_comment_api import ItemBundleSocialCommentApi, ItemBundleSocialCommentApiDict


class ApiV1CommentImportCommentsActionResponse(SdkBaseModel):
    success: bool
    item: ItemBundleSocialCommentApi


class ApiV1CommentImportCommentsActionResponseDict(TypedDict):
    success: bool
    item: ItemBundleSocialCommentApiDict
