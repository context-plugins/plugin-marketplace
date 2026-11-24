from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .coupon1 import Coupon1, Coupon1Dict


class PromotionCode(SdkBaseModel):
    code: str
    coupon: Coupon1


class PromotionCodeDict(TypedDict):
    code: str
    coupon: Coupon1Dict
