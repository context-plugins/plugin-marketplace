from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .paging_facebook_business_manager_facebook_pages_comments_api import (
    PagingFacebookBusinessManagerFacebookPagesCommentsApi,
    PagingFacebookBusinessManagerFacebookPagesCommentsApiDict,
)
from .post import Post, PostDict


class PostList(SdkBaseModel):
    data: Optional[list[Post]] = UNSET
    paging: Optional[PagingFacebookBusinessManagerFacebookPagesCommentsApi] = UNSET


class PostListDict(TypedDict):
    data: NotRequired[list[PostDict]]
    paging: NotRequired[PagingFacebookBusinessManagerFacebookPagesCommentsApiDict]
