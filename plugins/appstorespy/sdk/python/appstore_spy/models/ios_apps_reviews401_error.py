from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class IosAppsReviews401Error(SdkBaseModel):
    message: str
    code: int


class IosAppsReviews401ErrorDict(TypedDict):
    message: str
    code: int
