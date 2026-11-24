from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscMastodonStatusResponse1(SdkBaseModel):
    success: bool


class ApiV1MiscMastodonStatusResponse1Dict(TypedDict):
    success: bool
