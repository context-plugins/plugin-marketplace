from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .post_create import PostCreate, PostCreateDict


class PostsCreateResponse(SdkBaseModel):
    data: PostCreate


class PostsCreateResponseDict(TypedDict):
    data: PostCreateDict
