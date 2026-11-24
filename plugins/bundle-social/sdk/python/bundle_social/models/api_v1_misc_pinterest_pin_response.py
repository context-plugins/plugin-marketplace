from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscPinterestPinResponse(SdkBaseModel):
    success: bool
    permalink: str


class ApiV1MiscPinterestPinResponseDict(TypedDict):
    success: bool
    permalink: str
