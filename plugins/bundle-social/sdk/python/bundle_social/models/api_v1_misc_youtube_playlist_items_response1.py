from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .item2_bundle_social_misc_api import Item2BundleSocialMiscApi, Item2BundleSocialMiscApiDict
from .page_info import PageInfo, PageInfoDict


class ApiV1MiscYoutubePlaylistItemsResponse1(SdkBaseModel):
    kind: Optional[str] = UNSET
    etag: Optional[str] = UNSET
    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    prev_page_token: Optional[str] = Field(default=UNSET, alias="prevPageToken")
    page_info: Optional[PageInfo] = Field(default=UNSET, alias="pageInfo")
    items: Optional[list[Item2BundleSocialMiscApi]] = UNSET


class ApiV1MiscYoutubePlaylistItemsResponse1Dict(TypedDict):
    kind: NotRequired[str]
    etag: NotRequired[str]
    next_page_token: NotRequired[str]
    prev_page_token: NotRequired[str]
    page_info: NotRequired[PageInfoDict]
    items: NotRequired[list[Item2BundleSocialMiscApiDict]]
