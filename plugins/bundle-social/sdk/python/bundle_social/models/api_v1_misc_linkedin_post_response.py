from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscLinkedinPostResponse(SdkBaseModel):
    success: bool
    permalink: str


class ApiV1MiscLinkedinPostResponseDict(TypedDict):
    success: bool
    permalink: str
