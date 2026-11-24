from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .posts_preview_data import PostsPreviewData, PostsPreviewDataDict


class PostsPreviewResponse(SdkBaseModel):
    data: PostsPreviewData


class PostsPreviewResponseDict(TypedDict):
    data: PostsPreviewDataDict
