from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item1_bundle_social_post_csv_api import Item1BundleSocialPostCsvApi, Item1BundleSocialPostCsvApiDict


class ApiV1PostCsvImportRowsResponse(SdkBaseModel):
    items: list[Item1BundleSocialPostCsvApi]
    total: float


class ApiV1PostCsvImportRowsResponseDict(TypedDict):
    items: list[Item1BundleSocialPostCsvApiDict]
    total: float
