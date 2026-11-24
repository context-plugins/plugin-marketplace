from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .localized import Localized, LocalizedDict
from .thumbnails import Thumbnails, ThumbnailsDict


class Snippet(SdkBaseModel):
    published_at: Optional[str] = Field(default=UNSET, alias="publishedAt")
    channel_id: Optional[str] = Field(default=UNSET, alias="channelId")
    title: Optional[str] = UNSET
    description: Optional[str] = UNSET
    channel_title: Optional[str] = Field(default=UNSET, alias="channelTitle")
    thumbnails: Optional[Thumbnails] = UNSET
    localized: Optional[Localized] = UNSET


class SnippetDict(TypedDict):
    published_at: NotRequired[str]
    channel_id: NotRequired[str]
    title: NotRequired[str]
    description: NotRequired[str]
    channel_title: NotRequired[str]
    thumbnails: NotRequired[ThumbnailsDict]
    localized: NotRequired[LocalizedDict]
