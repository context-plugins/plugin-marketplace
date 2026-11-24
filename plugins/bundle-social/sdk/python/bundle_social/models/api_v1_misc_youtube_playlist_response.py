from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .item1_bundle_social_misc_api import Item1BundleSocialMiscApi, Item1BundleSocialMiscApiDict
from .page_info import PageInfo, PageInfoDict


class ApiV1MiscYoutubePlaylistResponse(SdkBaseModel):
    kind: Optional[str] = UNSET
    etag: Optional[str] = UNSET
    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    prev_page_token: Optional[str] = Field(default=UNSET, alias="prevPageToken")
    page_info: Optional[PageInfo] = Field(default=UNSET, alias="pageInfo")
    items: Optional[list[Item1BundleSocialMiscApi]] = UNSET


class ApiV1MiscYoutubePlaylistResponseDict(TypedDict):
    kind: NotRequired[str]
    etag: NotRequired[str]
    next_page_token: NotRequired[str]
    prev_page_token: NotRequired[str]
    page_info: NotRequired[PageInfoDict]
    items: NotRequired[list[Item1BundleSocialMiscApiDict]]
