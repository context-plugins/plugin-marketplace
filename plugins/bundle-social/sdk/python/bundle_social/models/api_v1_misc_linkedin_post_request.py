from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscLinkedinPostRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    post_id: str = Field(alias="postId")
    """The URN of the post to edit"""

    description: str
    """The updated text content"""


class ApiV1MiscLinkedinPostRequestDict(TypedDict):
    team_id: str
    post_id: str
    description: str
