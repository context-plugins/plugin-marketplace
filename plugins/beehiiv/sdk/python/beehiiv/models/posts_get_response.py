from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .post import Post, PostDict


class PostsGetResponse(SdkBaseModel):
    data: Post


class PostsGetResponseDict(TypedDict):
    data: PostDict
