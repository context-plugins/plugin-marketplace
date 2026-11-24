from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .principal import Principal, PrincipalDict


class Resolved(SdkBaseModel):
    phrase: str
    principal: Principal
    confidence: float


class ResolvedDict(TypedDict):
    phrase: str
    principal: PrincipalDict
    confidence: float
