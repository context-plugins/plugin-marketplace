from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .content_details3 import ContentDetails3, ContentDetails3Dict
from .snippet3 import Snippet3, Snippet3Dict


class ApiV1MiscYoutubePlaylistItemsResponse(SdkBaseModel):
    kind: Optional[str] = UNSET
    etag: Optional[str] = UNSET
    id: Optional[str] = UNSET
    snippet: Optional[Snippet3] = UNSET
    content_details: Optional[ContentDetails3] = Field(default=UNSET, alias="contentDetails")


class ApiV1MiscYoutubePlaylistItemsResponseDict(TypedDict):
    kind: NotRequired[str]
    etag: NotRequired[str]
    id: NotRequired[str]
    snippet: NotRequired[Snippet3Dict]
    content_details: NotRequired[ContentDetails3Dict]
