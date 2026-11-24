from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .import_bundle_social_post_import_api import ImportBundleSocialPostImportApi, ImportBundleSocialPostImportApiDict


class ApiV1PostHistoryImportResponse1(SdkBaseModel):
    imports: list[ImportBundleSocialPostImportApi]


class ApiV1PostHistoryImportResponse1Dict(TypedDict):
    imports: list[ImportBundleSocialPostImportApiDict]
