from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscSlackMessageRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    post_id: str = Field(alias="postId")
    """The ID of the post in our database"""

    description: str
    """The updated message text"""


class ApiV1MiscSlackMessageRequestDict(TypedDict):
    team_id: str
    post_id: str
    description: str
