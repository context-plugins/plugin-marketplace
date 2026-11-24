from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlayAppsInstallsDaily401Error(SdkBaseModel):
    message: str
    code: int


class PlayAppsInstallsDaily401ErrorDict(TypedDict):
    message: str
    code: int
