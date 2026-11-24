from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .comments import Comments, CommentsDict
from .enums.type import TypeOrStr
from .likes import Likes, LikesDict
from .shares import Shares, SharesDict


class Post(SdkBaseModel):
    id: Optional[str] = UNSET
    """The ID of the post"""

    message: Optional[str] = UNSET
    """The text content of the post"""

    story: Optional[str] = UNSET
    """Auto-generated story text for the post"""

    created_time: Optional[RFC3339DateTime] = UNSET
    """When the post was created"""

    updated_time: Optional[RFC3339DateTime] = UNSET
    """When the post was last updated"""

    full_picture: Optional[str] = UNSET
    """URL of the full-size post image"""

    permalink_url: Optional[str] = UNSET
    """Permanent URL to the post"""

    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    """Type of post content"""

    shares: Optional[Shares] = UNSET
    """Share count information"""

    likes: Optional[Likes] = UNSET
    comments: Optional[Comments] = UNSET
    attachments: Optional[Any] = UNSET
    """Media and link attachments on the post"""

    is_published: Optional[bool] = UNSET
    """Whether the post is published"""

    scheduled_publish_time: Optional[str] = UNSET
    """Unix timestamp for scheduled posts"""


class PostDict(TypedDict):
    id: NotRequired[str]
    message: NotRequired[str]
    story: NotRequired[str]
    created_time: NotRequired[RFC3339DateTime]
    updated_time: NotRequired[RFC3339DateTime]
    full_picture: NotRequired[str]
    permalink_url: NotRequired[str]
    type_: NotRequired[TypeOrStr]
    shares: NotRequired[SharesDict]
    likes: NotRequired[LikesDict]
    comments: NotRequired[CommentsDict]
    attachments: NotRequired[Any]
    is_published: NotRequired[bool]
    scheduled_publish_time: NotRequired[str]
