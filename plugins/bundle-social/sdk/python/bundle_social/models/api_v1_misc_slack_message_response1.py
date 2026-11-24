from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1MiscSlackMessageResponse1(SdkBaseModel):
    success: bool


class ApiV1MiscSlackMessageResponse1Dict(TypedDict):
    success: bool
