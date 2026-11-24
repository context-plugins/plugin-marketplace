from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Concern(SdkBaseModel):
    principle: str
    rule: str
    concern: str


class ConcernDict(TypedDict):
    principle: str
    rule: str
    concern: str
