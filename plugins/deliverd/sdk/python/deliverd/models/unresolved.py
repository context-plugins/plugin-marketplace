from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Unresolved(SdkBaseModel):
    phrase: str
    suggestion: str


class UnresolvedDict(TypedDict):
    phrase: str
    suggestion: str
