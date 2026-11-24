from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1MiscFacebookPostRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    post_id: str = Field(alias="postId")
    """The ID of the post/reel to edit"""

    description: Optional[str] = UNSET
    """The updated message/text content of the post"""


class ApiV1MiscFacebookPostRequestDict(TypedDict):
    team_id: str
    post_id: str
    description: NotRequired[str]
