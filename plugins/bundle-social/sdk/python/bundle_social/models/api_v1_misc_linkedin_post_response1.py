from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscLinkedinPostResponse1(SdkBaseModel):
    success: bool


class ApiV1MiscLinkedinPostResponse1Dict(TypedDict):
    success: bool
