from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .comment_ext_api import CommentExtApi, CommentExtApiDict


class CommentsResponseExtApi(SdkBaseModel):
    """Response containing all comments on a support ticket."""

    comments: Optional[list[CommentExtApi]] = UNSET


class CommentsResponseExtApiDict(TypedDict):
    comments: NotRequired[list[CommentExtApiDict]]
