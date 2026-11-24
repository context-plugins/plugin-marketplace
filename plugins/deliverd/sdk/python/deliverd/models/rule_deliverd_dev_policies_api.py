from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.effect import EffectOrStr


class RuleDeliverdDevPoliciesApi(SdkBaseModel):
    name: str
    priority: float
    effect: EffectOrStr


class RuleDeliverdDevPoliciesApiDict(TypedDict):
    name: str
    priority: float
    effect: EffectOrStr
