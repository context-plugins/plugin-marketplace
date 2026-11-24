from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .posts_test_send_data import PostsTestSendData, PostsTestSendDataDict


class PostsTestSendResponse(SdkBaseModel):
    data: PostsTestSendData


class PostsTestSendResponseDict(TypedDict):
    data: PostsTestSendDataDict
