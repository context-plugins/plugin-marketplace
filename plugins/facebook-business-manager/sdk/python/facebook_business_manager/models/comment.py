from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .from_model import FromModel, FromModelDict


class Comment(SdkBaseModel):
    id: Optional[str] = UNSET
    """The ID of the comment"""

    message: Optional[str] = UNSET
    """The text content of the comment"""

    from_: Optional[FromModel] = Field(default=UNSET, alias="from")
    """The person or Page that made the comment"""

    created_time: Optional[RFC3339DateTime] = UNSET
    """When the comment was created"""

    like_count: Optional[int] = UNSET
    """Number of likes on the comment"""

    comment_count: Optional[int] = UNSET
    """Number of replies to the comment"""

    is_hidden: Optional[bool] = UNSET
    """Whether the comment is hidden"""

    attachment: Optional[Any] = UNSET
    """Media attachment on the comment"""


class CommentDict(TypedDict):
    id: NotRequired[str]
    message: NotRequired[str]
    from_: NotRequired[FromModelDict]
    created_time: NotRequired[RFC3339DateTime]
    like_count: NotRequired[int]
    comment_count: NotRequired[int]
    is_hidden: NotRequired[bool]
    attachment: NotRequired[Any]
