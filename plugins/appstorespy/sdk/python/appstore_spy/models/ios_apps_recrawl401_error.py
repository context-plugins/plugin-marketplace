from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class IosAppsRecrawl401Error(SdkBaseModel):
    message: str
    code: int


class IosAppsRecrawl401ErrorDict(TypedDict):
    message: str
    code: int
