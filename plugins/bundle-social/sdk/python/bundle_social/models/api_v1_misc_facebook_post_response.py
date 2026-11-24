from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscFacebookPostResponse(SdkBaseModel):
    success: bool
    permalink: str


class ApiV1MiscFacebookPostResponseDict(TypedDict):
    success: bool
    permalink: str
