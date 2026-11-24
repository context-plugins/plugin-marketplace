from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV2Hlr422Error1(SdkBaseModel):
    error: str


class ApiV2Hlr422Error1Dict(TypedDict):
    error: str
