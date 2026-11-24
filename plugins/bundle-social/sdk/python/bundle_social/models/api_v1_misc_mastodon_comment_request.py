from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1MiscMastodonCommentRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    comment_id: str = Field(alias="commentId")
    """The ID of the comment in bundle.social"""

    text: str
    """The updated comment text"""

    spoiler_text: Optional[str] = Field(default=UNSET, alias="spoilerText")
    """The updated spoiler/content warning text"""


class ApiV1MiscMastodonCommentRequestDict(TypedDict):
    team_id: str
    comment_id: str
    text: str
    spoiler_text: NotRequired[str]
