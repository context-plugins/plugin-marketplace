from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscGoogleBusinessPostRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    team_id: str = Field(alias="teamId")
    post_id: str = Field(alias="postId")
    """The ID of the post in bundle.social"""


class ApiV1MiscGoogleBusinessPostRequestDict(TypedDict):
    team_id: str
    post_id: str
