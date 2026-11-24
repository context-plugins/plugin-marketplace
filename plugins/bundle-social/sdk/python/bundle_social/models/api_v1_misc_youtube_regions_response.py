from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .item4_bundle_social_misc_api import Item4BundleSocialMiscApi, Item4BundleSocialMiscApiDict


class ApiV1MiscYoutubeRegionsResponse(SdkBaseModel):
    kind: Optional[str] = UNSET
    etag: Optional[str] = UNSET
    items: Optional[list[Item4BundleSocialMiscApi]] = UNSET


class ApiV1MiscYoutubeRegionsResponseDict(TypedDict):
    kind: NotRequired[str]
    etag: NotRequired[str]
    items: NotRequired[list[Item4BundleSocialMiscApiDict]]
