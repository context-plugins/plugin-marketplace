from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscFacebookPostResponse1(SdkBaseModel):
    success: bool


class ApiV1MiscFacebookPostResponse1Dict(TypedDict):
    success: bool
