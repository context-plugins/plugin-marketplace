from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.privacy_status2 import PrivacyStatus2OrStr


class ApiV1MiscYoutubeVideoRequest(SdkBaseModel):
    team_id: str = Field(alias="teamId")
    post_id: str = Field(alias="postId")
    """Post ID for reference"""

    title: Optional[str] = UNSET
    """The updated video title"""

    description: Optional[str] = UNSET
    """The updated video description"""

    tags: Optional[list[str]] = UNSET
    """The updated tags"""

    category_id: Optional[str] = Field(default=UNSET, alias="categoryId")
    """The updated category ID"""

    privacy_status: Optional[PrivacyStatus2OrStr] = Field(default=UNSET, alias="privacyStatus")
    """The updated privacy status"""

    default_language: Optional[str] = Field(default=UNSET, alias="defaultLanguage")
    """BCP-47 language code for the video's title and description, e.g. "en" or "pl"."""

    default_audio_language: Optional[str] = Field(default=UNSET, alias="defaultAudioLanguage")
    """BCP-47 language code for the video's default audio track, e.g. "en" or "pl"."""


class ApiV1MiscYoutubeVideoRequestDict(TypedDict):
    team_id: str
    post_id: str
    title: NotRequired[str]
    description: NotRequired[str]
    tags: NotRequired[list[str]]
    category_id: NotRequired[str]
    privacy_status: NotRequired[PrivacyStatus2OrStr]
    default_language: NotRequired[str]
    default_audio_language: NotRequired[str]
