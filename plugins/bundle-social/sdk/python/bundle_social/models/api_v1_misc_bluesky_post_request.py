from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscBlueskyPostRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    post_id: str = Field(alias="postId")
    """The ID of the post in bundle.social"""


class ApiV1MiscBlueskyPostRequestDict(TypedDict):
    team_id: str
    post_id: str
