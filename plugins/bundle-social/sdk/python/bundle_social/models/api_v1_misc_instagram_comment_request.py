from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscInstagramCommentRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    comment_id: str = Field(alias="commentId")
    """The ID of the comment in bundle.social"""


class ApiV1MiscInstagramCommentRequestDict(TypedDict):
    team_id: str
    comment_id: str
