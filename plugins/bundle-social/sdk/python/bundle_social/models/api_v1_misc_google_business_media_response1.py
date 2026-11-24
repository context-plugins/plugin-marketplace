from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .media_item_bundle_social_misc_api import MediaItemBundleSocialMiscApi, MediaItemBundleSocialMiscApiDict


class ApiV1MiscGoogleBusinessMediaResponse1(SdkBaseModel):
    media_items: Optional[list[MediaItemBundleSocialMiscApi]] = Field(default=UNSET, alias="mediaItems")
    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    total_media_item_count: Optional[float] = Field(default=UNSET, alias="totalMediaItemCount")


class ApiV1MiscGoogleBusinessMediaResponse1Dict(TypedDict):
    media_items: NotRequired[list[MediaItemBundleSocialMiscApiDict]]
    next_page_token: NotRequired[str]
    total_media_item_count: NotRequired[float]
