from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .import1 import Import1, Import1Dict


class ApiV1MiscFacebookRecommendationsImportResponse1(SdkBaseModel):
    imports: list[Import1]


class ApiV1MiscFacebookRecommendationsImportResponse1Dict(TypedDict):
    imports: list[Import1Dict]
