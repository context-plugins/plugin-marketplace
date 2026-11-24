from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1Team404Error1(SdkBaseModel):
    message: str


class ApiV1Team404Error1Dict(TypedDict):
    message: str
