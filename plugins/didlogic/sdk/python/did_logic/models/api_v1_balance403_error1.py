from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV1Balance403Error1(SdkBaseModel):
    error: str


class ApiV1Balance403Error1Dict(TypedDict):
    error: str
