from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.privacy_status import PrivacyStatusOrStr


class ApiV1MiscYoutubePlaylistRequest1(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    title: str
    """bundle.social does not store this value and YouTube overites it everytime so you need to pass it everytime"""

    description: str
    """bundle.social does not store this value and YouTube overites it everytime so you need to pass it everytime"""

    privacy_status: Optional[PrivacyStatusOrStr] = Field(default=UNSET, alias="privacyStatus")
    playlist_id: str = Field(alias="playlistId")


class ApiV1MiscYoutubePlaylistRequest1Dict(TypedDict):
    team_id: str
    title: str
    description: str
    privacy_status: NotRequired[PrivacyStatusOrStr]
    playlist_id: str
