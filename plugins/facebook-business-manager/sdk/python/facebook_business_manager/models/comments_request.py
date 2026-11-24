from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CommentsRequest(SdkBaseModel):
    message: str
    """The comment text"""

    attachment_url: Optional[str] = UNSET
    """URL of an image to include with the comment"""


class CommentsRequestDict(TypedDict):
    message: str
    attachment_url: NotRequired[str]
