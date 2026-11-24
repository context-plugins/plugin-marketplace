from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .item3_bundle_social_misc_api import Item3BundleSocialMiscApi, Item3BundleSocialMiscApiDict


class ApiV1MiscYoutubeVideoCategoriesResponse(SdkBaseModel):
    kind: Optional[str] = UNSET
    etag: Optional[str] = UNSET
    items: Optional[list[Item3BundleSocialMiscApi]] = UNSET


class ApiV1MiscYoutubeVideoCategoriesResponseDict(TypedDict):
    kind: NotRequired[str]
    etag: NotRequired[str]
    items: NotRequired[list[Item3BundleSocialMiscApiDict]]
