from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlayAppsReviews401Error(SdkBaseModel):
    message: str
    code: int


class PlayAppsReviews401ErrorDict(TypedDict):
    message: str
    code: int
