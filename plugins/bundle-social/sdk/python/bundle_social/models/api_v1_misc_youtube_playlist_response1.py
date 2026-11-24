from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .content_details import ContentDetails, ContentDetailsDict
from .snippet import Snippet, SnippetDict
from .status_bundle_social_misc_api import StatusBundleSocialMiscApi, StatusBundleSocialMiscApiDict


class ApiV1MiscYoutubePlaylistResponse1(SdkBaseModel):
    kind: Optional[str] = UNSET
    etag: Optional[str] = UNSET
    id: Optional[str] = UNSET
    snippet: Optional[Snippet] = UNSET
    status: Optional[StatusBundleSocialMiscApi] = UNSET
    content_details: Optional[ContentDetails] = Field(default=UNSET, alias="contentDetails")


class ApiV1MiscYoutubePlaylistResponse1Dict(TypedDict):
    kind: NotRequired[str]
    etag: NotRequired[str]
    id: NotRequired[str]
    snippet: NotRequired[SnippetDict]
    status: NotRequired[StatusBundleSocialMiscApiDict]
    content_details: NotRequired[ContentDetailsDict]
