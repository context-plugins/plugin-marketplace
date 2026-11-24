from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item_bundle_social_post_api import ItemBundleSocialPostApi, ItemBundleSocialPostApiDict


class ApiV1PostReconnectSocialAccountCandidatesResponse(SdkBaseModel):
    items: list[ItemBundleSocialPostApi]
    total: float


class ApiV1PostReconnectSocialAccountCandidatesResponseDict(TypedDict):
    items: list[ItemBundleSocialPostApiDict]
    total: float
