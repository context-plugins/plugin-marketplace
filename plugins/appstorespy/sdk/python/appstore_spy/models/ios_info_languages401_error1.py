from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class IosInfoLanguages401Error1(SdkBaseModel):
    message: str
    code: int


class IosInfoLanguages401Error1Dict(TypedDict):
    message: str
    code: int
