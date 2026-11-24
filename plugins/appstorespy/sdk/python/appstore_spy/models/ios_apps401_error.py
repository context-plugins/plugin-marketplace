from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class IosApps401Error(SdkBaseModel):
    message: str
    code: int


class IosApps401ErrorDict(TypedDict):
    message: str
    code: int
