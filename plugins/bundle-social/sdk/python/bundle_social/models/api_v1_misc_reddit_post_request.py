from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscRedditPostRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    post_id: str = Field(alias="postId")
    """The ID of the post to edit (without prefix)"""

    description: str
    """The updated text content (selftext for text posts, works for all editable post types)"""


class ApiV1MiscRedditPostRequestDict(TypedDict):
    team_id: str
    post_id: str
    description: str
