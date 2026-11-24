from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscYoutubeThumbnailRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    url: str
    post_id: str = Field(alias="postId")


class ApiV1MiscYoutubeThumbnailRequestDict(TypedDict):
    team_id: str
    url: str
    post_id: str
