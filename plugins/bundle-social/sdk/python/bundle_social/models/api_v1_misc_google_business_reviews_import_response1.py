from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .import_bundle_social_misc_api import ImportBundleSocialMiscApi, ImportBundleSocialMiscApiDict


class ApiV1MiscGoogleBusinessReviewsImportResponse1(SdkBaseModel):
    imports: list[ImportBundleSocialMiscApi]


class ApiV1MiscGoogleBusinessReviewsImportResponse1Dict(TypedDict):
    imports: list[ImportBundleSocialMiscApiDict]
