from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class IosInfoLanguages401Error(SdkBaseModel):
    message: str
    code: int


class IosInfoLanguages401ErrorDict(TypedDict):
    message: str
    code: int
