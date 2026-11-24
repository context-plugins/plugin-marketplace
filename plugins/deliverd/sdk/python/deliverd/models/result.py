from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.effect import EffectOrStr


class Result(SdkBaseModel):
    name: str
    passed: bool
    effect: EffectOrStr
    rule: str | None
    problem: str | None


class ResultDict(TypedDict):
    name: str
    passed: bool
    effect: EffectOrStr
    rule: str | None
    problem: str | None
