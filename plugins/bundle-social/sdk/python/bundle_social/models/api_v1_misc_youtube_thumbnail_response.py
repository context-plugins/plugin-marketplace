from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .item_bundle_social_misc_api import ItemBundleSocialMiscApi, ItemBundleSocialMiscApiDict


class ApiV1MiscYoutubeThumbnailResponse(SdkBaseModel):
    items: Optional[list[ItemBundleSocialMiscApi]] = UNSET


class ApiV1MiscYoutubeThumbnailResponseDict(TypedDict):
    items: NotRequired[list[ItemBundleSocialMiscApiDict]]
