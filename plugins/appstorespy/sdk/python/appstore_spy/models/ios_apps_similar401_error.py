from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class IosAppsSimilar401Error(SdkBaseModel):
    message: str
    code: int


class IosAppsSimilar401ErrorDict(TypedDict):
    message: str
    code: int
