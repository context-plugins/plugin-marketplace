from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .comment import Comment, CommentDict
from .paging import Paging, PagingDict


class CommentList(SdkBaseModel):
    data: Optional[list[Comment]] = UNSET
    paging: Optional[Paging] = UNSET


class CommentListDict(TypedDict):
    data: NotRequired[list[CommentDict]]
    paging: NotRequired[PagingDict]
