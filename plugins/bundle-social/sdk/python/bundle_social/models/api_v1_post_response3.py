from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item1_bundle_social_post_api import Item1BundleSocialPostApi, Item1BundleSocialPostApiDict


class ApiV1PostResponse3(SdkBaseModel):
    items: list[Item1BundleSocialPostApi]
    total: float


class ApiV1PostResponse3Dict(TypedDict):
    items: list[Item1BundleSocialPostApiDict]
    total: float
