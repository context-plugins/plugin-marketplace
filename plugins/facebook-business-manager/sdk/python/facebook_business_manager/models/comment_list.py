from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .comment import Comment, CommentDict
from .paging_facebook_business_manager_facebook_pages_comments_api import (
    PagingFacebookBusinessManagerFacebookPagesCommentsApi,
    PagingFacebookBusinessManagerFacebookPagesCommentsApiDict,
)


class CommentList(SdkBaseModel):
    data: Optional[list[Comment]] = UNSET
    paging: Optional[PagingFacebookBusinessManagerFacebookPagesCommentsApi] = UNSET


class CommentListDict(TypedDict):
    data: NotRequired[list[CommentDict]]
    paging: NotRequired[PagingFacebookBusinessManagerFacebookPagesCommentsApiDict]
