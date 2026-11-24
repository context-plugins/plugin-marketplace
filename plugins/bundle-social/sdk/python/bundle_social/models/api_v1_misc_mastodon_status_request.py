from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1MiscMastodonStatusRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    post_id: str = Field(alias="postId")
    """The ID of the post in our database"""

    description: str
    """The updated status text"""

    spoiler_text: Optional[str] = Field(default=UNSET, alias="spoilerText")
    """The updated spoiler/content warning text"""


class ApiV1MiscMastodonStatusRequestDict(TypedDict):
    team_id: str
    post_id: str
    description: str
    spoiler_text: NotRequired[str]
