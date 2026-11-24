from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1MiscYoutubePlaylistItemsRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    playlist_id: str = Field(alias="playlistId")
    post_id: str = Field(alias="postId")
    position: Optional[int] = UNSET


class ApiV1MiscYoutubePlaylistItemsRequestDict(TypedDict):
    team_id: str
    playlist_id: str
    post_id: str
    position: NotRequired[int]
