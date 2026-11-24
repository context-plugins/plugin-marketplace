from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item_bundle_social_post_csv_api import ItemBundleSocialPostCsvApi, ItemBundleSocialPostCsvApiDict


class ApiV1PostCsvImportResponse1(SdkBaseModel):
    items: list[ItemBundleSocialPostCsvApi]
    total: float


class ApiV1PostCsvImportResponse1Dict(TypedDict):
    items: list[ItemBundleSocialPostCsvApiDict]
    total: float
